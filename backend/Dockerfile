# Use official Node image
FROM node:18-alpine

# Create app dir
WORKDIR /usr/src/app

# Install deps
COPY package.json ./

RUN npm install --omit=dev


# Copy source
COPY index.js ./

# Expose and run
EXPOSE 5000
CMD ["node", "index.js"]
