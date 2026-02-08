

2026.02.03 - codename jade
--------------------------

go to folder where you want to create the frontend package
  G:\launchpad\

create new nextjs project:
  npx create-next-app@latest frontend

run the frontend (run bat file script)
  cd G:\launchpad\frontend
  npm run dev
  >> to change port: edit file: package.json, in section "scripts", update: "dev": "next dev -p 3303"; 

to add new modules/packages:
  npm ci



------------------ example to make an server-side API call
open workspace: OPENAI-003-responses-api

ChatHistoryPersistence
  - <a onClick={getChatHistory}>Get saved sessions</a>
    - const getChatHistory = async (e?: any) => {}
       - {.. getChatHistoryPersistence ..} = chatMessages() // import {... getChatHistoryPersistence ...} from '@/components/ChatMessageWrapper'

  ChatMessageWrapper
    - getChatHistoryPersistence: () => Promise<void>
       - const getChatHistoryPersistence = async () => {}
          - const data = await sendChatHistoryPersistenceRequest() -> /lib/sendChatHistoryPersistenceRequest.ts

// create flow diagram so it will be easier to remember later


D:\_AI.learning.path\_github\OPENAI-003-responses-api