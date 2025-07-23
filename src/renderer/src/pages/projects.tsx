import { JSX } from 'react'
import NewProjectForm from '@renderer/components/projects/newProjectForm'

export default function Projects(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:pt-6 h-full">
      {/** new project */}
      <div className="border-2 border-base-300 rounded-lg h-full flex flex-col">
        {/** header */}
        <div className="bg-slate-100 rounded-t-lg p-4 border-b border-base-300">
          <h2 className="text-xl">Setup</h2>
        </div>

        {/** body */}
        <NewProjectForm />
      </div>

      {/** Preview */}
      <div className="border-2 border-base-300 rounded-lg h-full flex flex-col">
        {/** header */}
        <div className="bg-slate-100 rounded-t-lg p-4 border-b border-base-300">
          <h2 className="text-xl">Preview</h2>
        </div>

        {/** body */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box h-full">
          <input type="radio" name="preview" className="tab" aria-label="Dockerfile" />
          <div className="tab-content bg-base-100 border-base-300">
            <textarea
              className="textarea w-full font-mono resize-y h-full"
              value={dockerfile}
              readOnly
              spellCheck={false}
            />
          </div>

          <input
            type="radio"
            name="preview"
            className="tab"
            aria-label="docker-compose"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300">
            <textarea
              className="textarea w-full font-mono resize-y h-full"
              value={dockercompose}
              readOnly
              spellCheck={false}
            />
          </div>

          <input type="radio" name="preview" className="tab" aria-label=".env" />
          <div className="tab-content bg-base-100 border-base-300">
            <textarea
              className="textarea w-full font-mono resize-y h-full"
              value={env_file}
              readOnly
              spellCheck={false}
            />
          </div>

          <input type="radio" name="preview" className="tab" aria-label="nginx.conf" />
          <div className="tab-content bg-base-100 border-base-300 h-full">
            <textarea
              className="textarea w-full font-mono resize-y h-full"
              value={nginxConfig}
              readOnly
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const nginxConfig = `
server {
    listen 80;

    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
  `

const env_file = `
# Configuration de l'environnement

DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
SECRET_KEY=supersecretkey12345
DEBUG=True
PORT=3000
  `

const dockerfile = `
  # Utiliser une image officielle Node.js
FROM node:18-alpine

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l’application
COPY . .

# Construire l’application (si nécessaire)
RUN npm run build

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l’application
CMD ["npm", "start"]
`

const dockercompose = `
  version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
    depends_on:
      - db

  db:
    image: postgres:15
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
`
