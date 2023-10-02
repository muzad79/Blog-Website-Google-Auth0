const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('./config/keys')
const User=require('./models/user-model')


const GOOGLE_CLIENT_ID="146827143582-8kfshulae2dphhdob1dbism7hb7loqdi.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.serializeUser((user,done)=>{
    
    done(null,user.id);
})


passport.deserializeUser((id,done)=>{

    User.findById(id).then((user)=>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) { 
    User.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser){
            //already have the user
            //console.log('user is:',currentUser)
            done(null,currentUser);
        }else{
            //create user in our db
            new User({
                username:profile.displayName,
                googleId:profile.id,
                photos:profile.photos[0].value
            }).save().then((newUser)=>{
                console.log('user creatd : '+newUser)
                done(null,newUser);
            })
        }
    })
  }
));