import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api"

dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});
const webAppUrl = "https://vpn-tg-xc5x.vercel.app/"



bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Создаем инлайн-кнопку
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Открыть Web App', web_app: { url: "https://vpn-tg-xc5x.vercel.app/"} },
        ],
        [
          { text: 'Просто', callback_data: 'simple_button' },
        ],
      ],
    },
  };

  // Отправляем сообщение с инлайн-кнопками
  bot.sendMessage(chatId, 'Выберите опцию:', options);
});

// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
// 	const text = msg.text;


//   bot.sendMessage(chatId, 'Received your message');
// });

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'simple_button') {
    bot.sendMessage(chatId, 'Вы нажали простую кнопку!');
  }
});