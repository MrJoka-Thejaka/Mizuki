FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MrJoka-Thejaka/Mizuki /root/Mizuki
WORKDIR /root/Mizuki/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
