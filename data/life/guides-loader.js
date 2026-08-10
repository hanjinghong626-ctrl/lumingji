// 统一加载所有 Guide 内容
// 新增 Guide 时只需在此处添加 import 和映射

import airportToCity from './guides/airport-to-city.js';
import alipayFullGuide from './guides/alipay-full-guide.js';
import bankTransfer from './guides/bank-transfer.js';
import bikeSharing from './guides/bike-sharing.js';
import bindForeignCard from './guides/bind-foreign-card.js';
import bubbleTea from './guides/bubble-tea.js';
import busGuide from './guides/bus-guide.js';
import buySimCard from './guides/buy-sim-card.js';
import campusCard from './guides/campus-card.js';
import canteenGuide from './guides/canteen-guide.js';
import choosePhonePlan from './guides/choose-phone-plan.js';
import currencyExchange from './guides/currency-exchange.js';
import depositRefund from './guides/deposit-refund.js';
import dietaryRestrictions from './guides/dietary-restrictions.js';
import digitalYuan from './guides/digital-yuan.js';
import driveInChina from './guides/drive-in-china.js';
import emergencyContacts from './guides/emergency-contacts.js';
import evCharging from './guides/ev-charging.js';
import firstWeekChecklist from './guides/first-week-checklist.js';
import flightBooking from './guides/flight-booking.js';
import foodDelivery from './guides/food-delivery.js';
import foodSafety from './guides/food-safety.js';
import halalFood from './guides/halal-food.js';
import intercityTravel from './guides/intercity-travel.js';
import internshipRules from './guides/internship-rules.js';
import legalRights from './guides/legal-rights.js';
import metroGuide from './guides/metro-guide.js';
import navigationApps from './guides/navigation-apps.js';
import nightMarket from './guides/night-market.js';
import openBankAccount from './guides/open-bank-account.js';
import parkingGuide from './guides/parking-guide.js';
import partTimePayment from './guides/part-time-payment.js';
import policeRegistration from './guides/police-registration.js';
import rechargePhone from './guides/recharge-phone.js';
import registerDormitory from './guides/register-dormitory.js';
import residencePermit from './guides/residence-permit.js';
import restaurantOrdering from './guides/restaurant-ordering.js';
import rideHailing from './guides/ride-hailing.js';
import russianFood from './guides/russian-food.js';
import scholarshipPayment from './guides/scholarship-payment.js';
import setupAlipay from './guides/setup-alipay.js';
import setupWechat from './guides/setup-wechat.js';
import taxRefund from './guides/tax-refund.js';
import trafficRules from './guides/traffic-rules.js';
import trainTicket from './guides/train-ticket.js';
import transportCard from './guides/transport-card.js';
import useDouyin from './guides/use-douyin.js';
import useEmailChina from './guides/use-email-china.js';
import useQq from './guides/use-qq.js';
import useWeibo from './guides/use-weibo.js';
import useXiaohongshu from './guides/use-xiaohongshu.js';
import utilityBills from './guides/utility-bills.js';
import vegetarianGuide from './guides/vegetarian-guide.js';
import visaExtension from './guides/visa-extension.js';
import visaRenewal from './guides/visa-renewal.js';
import visaTypes from './guides/visa-types.js';
import vpnLegalNotice from './guides/vpn-legal-notice.js';
import wechatFullGuide from './guides/wechat-full-guide.js';
import wechatPayGuide from './guides/wechat-pay-guide.js';
import workPermit from './guides/work-permit.js';

const guidesMap = {
  'airport-to-city': airportToCity,
  'alipay-full-guide': alipayFullGuide,
  'bank-transfer': bankTransfer,
  'bike-sharing': bikeSharing,
  'bind-foreign-card': bindForeignCard,
  'bubble-tea': bubbleTea,
  'bus-guide': busGuide,
  'buy-sim-card': buySimCard,
  'campus-card': campusCard,
  'canteen-guide': canteenGuide,
  'choose-phone-plan': choosePhonePlan,
  'currency-exchange': currencyExchange,
  'deposit-refund': depositRefund,
  'dietary-restrictions': dietaryRestrictions,
  'digital-yuan': digitalYuan,
  'drive-in-china': driveInChina,
  'emergency-contacts': emergencyContacts,
  'ev-charging': evCharging,
  'first-week-checklist': firstWeekChecklist,
  'flight-booking': flightBooking,
  'food-delivery': foodDelivery,
  'food-safety': foodSafety,
  'halal-food': halalFood,
  'intercity-travel': intercityTravel,
  'internship-rules': internshipRules,
  'legal-rights': legalRights,
  'metro-guide': metroGuide,
  'navigation-apps': navigationApps,
  'night-market': nightMarket,
  'open-bank-account': openBankAccount,
  'parking-guide': parkingGuide,
  'part-time-payment': partTimePayment,
  'police-registration': policeRegistration,
  'recharge-phone': rechargePhone,
  'register-dormitory': registerDormitory,
  'residence-permit': residencePermit,
  'restaurant-ordering': restaurantOrdering,
  'ride-hailing': rideHailing,
  'russian-food': russianFood,
  'scholarship-payment': scholarshipPayment,
  'setup-alipay': setupAlipay,
  'setup-wechat': setupWechat,
  'tax-refund': taxRefund,
  'traffic-rules': trafficRules,
  'train-ticket': trainTicket,
  'transport-card': transportCard,
  'use-douyin': useDouyin,
  'use-email-china': useEmailChina,
  'use-qq': useQq,
  'use-weibo': useWeibo,
  'use-xiaohongshu': useXiaohongshu,
  'utility-bills': utilityBills,
  'vegetarian-guide': vegetarianGuide,
  'visa-extension': visaExtension,
  'visa-renewal': visaRenewal,
  'visa-types': visaTypes,
  'vpn-legal-notice': vpnLegalNotice,
  'wechat-full-guide': wechatFullGuide,
  'wechat-pay-guide': wechatPayGuide,
  'work-permit': workPermit,
};

export default function getGuideData(guideId) {
  return guidesMap[guideId] || null;
}