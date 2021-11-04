FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MrJoka-Thejaka/Mizuki /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
