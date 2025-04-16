# Getting Started
# tutorLink-server-side
## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Multer**
- **Cloudinary**
- **dotenv**, **CORS**, **Zod**
- **JSON Web Token (JWT)**
- **bycrypt**
- **ESLint**

## Payment Integration
1.shurjapay

1. All Dependencies Install:
```bash
npm install
```
2. Set up environment variables in your .env file:
```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://phum-university:qqbSHLcOzrLBX6Jw@cluster0.gc7k6.mongodb.net/tutor-link-portfolio?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET = 091b2c529dec033b5ff4531e622ea3f93170e045222963319662b7e4a34f0cdd
JWT_REFRESH_SECRET = 41b991b21dc0a439cb45fed544992ba3fafa3f912d3c4dedebec3592d7d552fb74a86a4d69ea560bcf7bf988d173ddecaffa9815dd5a6661bcacd58c0cdb2dc5
CLIENT_SIDE_URL=https://tutorlink-client-side.vercel.app/
CLOUDINARY_CLOUD_NAME=dhobkuiqj 
CLOUDINARY_API_KEY=342361686225584
CLOUDINARY_API_SECRET=K4AhK_3bvJSMKNsRfCJrGrvgTIo
SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL=https://tutorlink-client-side.vercel.app/student/verifyBooking
```
3. Build in Server
```bash
npm run build
```
4.Start the Server
```bash
npm run start:dev
```

"# portfolio-tutorlink-server" 
