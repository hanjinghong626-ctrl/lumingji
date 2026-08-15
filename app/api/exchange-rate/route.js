import { NextResponse } from 'next/server';
import { getExchangeRates, convertCurrency, CURRENCY_NAMES } from '../../../lib/exchange-rate';

/**
 * 汇率 API 端点
 * GET /api/exchange-rate - 获取所有汇率
 * GET /api/exchange-rate?from=USD&to=CNY&amount=100 - 货币转换
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const amount = parseFloat(searchParams.get('amount'));

    // 货币转换请求
    if (from && to && !isNaN(amount)) {
      const result = await convertCurrency(amount, from, to);
      if (!result) {
        return NextResponse.json({ error: 'Invalid currency pair' }, { status: 400 });
      }
      return NextResponse.json({
        success: true,
        data: result,
      });
    }

    // 获取所有汇率
    const rates = await getExchangeRates();
    
    // 构建完整响应，附带货币名称
    const currencies = {};
    for (const [code, info] of Object.entries(CURRENCY_NAMES)) {
      if (rates.rates[code] !== undefined) {
        currencies[code] = {
          rate: rates.rates[code],
          name: info,
        };
      }
    }

    return NextResponse.json({
      success: true,
      base: rates.base,
      date: rates.date,
      isFallback: rates.isFallback || false,
      currencies,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Exchange rate API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exchange rates' },
      { status: 500 }
    );
  }
}
