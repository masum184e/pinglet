# Pinglet

## System Overview

A scalable, real-time chat application supporting 1-to-1 and group conversations with full message history, typing indicators, reactions, file sharing, and push notifications.

### Tech Stack

**Backend:**

- Node.js 20 + Express.js
- PostgreSQL (primary data store)
- Redis (caching, real-time state)
- RabbitMQ (message queue for async tasks)
- Socket.IO (WebSocket with fallback)

**Frontend:**

- React 18+ / Next.js
- Socket.IO Client
- State management (custom hooks with useReducer)

**Infrastructure:**

- Docker & Docker Compose
- Horizontal scaling with load balancer
- Database replication & sharding
- Swagger for interactive API explorer
