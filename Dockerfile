FROM node:20-alpine AS build

WORKDIR /app

# Copier package.json et package-lock.json (ou yarn.lock / pnpm-lock.yaml)
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci --omit=dev

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port utilisé par Vite (par défaut 5173)
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "preview"]
