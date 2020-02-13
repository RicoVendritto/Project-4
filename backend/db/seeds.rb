# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(name: "Rico", email: "richard.braamburg@gmail.com", password_digest: "$2a$12$u8xSAXpeepNhESKrJx/aD.TV20hMKDk5VHj9s4KrOwVT9//qrEX2K",)

post1 = Post.create(title: "Charlotte de Witte | Tomorrowland Belgium 2019 - W2", video_url: "https://www.youtube.com/watch?v=RF60iDaoEPw&list=PLoSIOFPSXQoOzRM5tbCes1MmKkzHi8jPq&index=5&t=0s", artist: "Charlotte de Witte", description: "Let these stories inspire you, challenge you, move you, change your mind and expand your reality. Live Today, Love Tomorrow, Unite Forever,... - www.tomorrowland.com", created_by: "1");
post2 = Post.create(title: "Afrojack | Tomorrowland Belgium 2019 - W1", video_url: "https://www.youtube.com/watch?v=xmJAKD3E2Ys&list=PLoSIOFPSXQoOzRM5tbCes1MmKkzHi8jPq&index=6&t=190s", artist: "Afrojack", description: "Let these stories inspire you, challenge you, move you, change your mind and expand your reality. Live Today, Love Tomorrow, Unite Forever,... - www.tomorrowland.com", created_by: "1");
post3 = Post.create(title: "Timmy Trumpet | Tomorrowland Belgium 2019 - W1", video_url: "https://www.youtube.com/watch?v=Jdi0uEWaRkc&list=PLoSIOFPSXQoOzRM5tbCes1MmKkzHi8jPq&index=11&t=0s", artist: "Timmy Trumpet", description: "Let these stories inspire you, challenge you, move you, change your mind and expand your reality. Live Today, Love Tomorrow, Unite Forever,... - www.tomorrowland.com", created_by: "1");
post4 = Post.create(title: "W&W | Tomorrowland Belgium 2019 - W1", video_url: "https://www.youtube.com/watch?v=BWRFVqQS7Fk&list=PLoSIOFPSXQoOzRM5tbCes1MmKkzHi8jPq&index=35&t=0s", artist: "W&W", description: "Let these stories inspire you, challenge you, move you, change your mind and expand your reality. Live Today, Love Tomorrow, Unite Forever,... - www.tomorrowland.com", created_by: "1");
post5 = Post.create(title: "Armin van Buuren | Tomorrowland Belgium 2019 - W2", video_url: "https://www.youtube.com/watch?v=kIAFVYH5NdY&list=PLoSIOFPSXQoOzRM5tbCes1MmKkzHi8jPq&index=50&t=0s", artist: "Armin van Buuren", description: "Let these stories inspire you, challenge you, move you, change your mind and expand your reality. Live Today, Love Tomorrow, Unite Forever,... - www.tomorrowland.com", created_by: "1");
post6 = Post.create(title: "Martin Garrix | Live @ The Ether - A'dam Rai 2019", video_url: "https://www.youtube.com/watch?v=lGCo8ILvauI&t=5786s", artist: "Martin Garrix", description: "Great to be back home in Amsterdam for my THE ETHER show during Amsterdam Dance Event 2019! So proud of the team, it looks so sick in 4K! Dropped some new STMPD RCRDS IDs in there too, so hope you like it!", created_by: "1");
post7 = Post.create(title: "Martin Garrix | Live @ Ultra Music Festival - Miami 2019", video_url: "https://www.youtube.com/watch?v=WKuaujIHBT4", artist: "Martin Garrix", description: "Ultra Miami, it was so good to be back... missed you guys! ❤️I hope you enjoyed the liveset, the visuals and also some new STMPD music! 🔥👀 Comment your favourite track from the liveshow!", created_by: "1");
post8 = Post.create(title: "Tomorrowland Belgijm 2019 - Official Aftermovie", video_url: "https://www.youtube.com/watch?v=hvIg3PTJWxs", artist: "Various Artists", description: "People of Tomorrow, thank you for writing your chapter in one of the greatest stories ever told: The Book of Wisdom. Fifteen wonderful years of creating musical stories are behind us, but many decades lie ahead. Let these stories guide you, inspire you and expand your reality.", created_by: "1");
post9 = Post.create(title: "Hardwell | Tomorrowland Belgium 2018 - W1", video_url: "https://www.youtube.com/watch?v=Y8N9vxYxWcc", artist: "Hardwell", description: "Hardwell Live at Tomorrowland 2018 (Weekend 1)", created_by: "1");
post10 = Post.create(title: "Martin Garrix | ANIMA - A''am Rai 2018", video_url: "https://www.youtube.com/watch?v=CwE-haZR2fc&t=3s", artist: "Marin Garrix", description: "Thank you for coming, was so great to be back at the Amsterdam RAI this year. Hope you enjoy my liveshow ANIMA, which was recorded in 4K UHD and with 5.1 surround sound during ADE 2018! So proud of the result!", created_by: "1");


