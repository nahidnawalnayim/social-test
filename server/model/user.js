const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
   
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      messages: (prop) => `Invalid Email: ${prop.value}`,
    },
  },
  password: {
    type: String,
   required: true
  },
  // roles: {
  //   type: String,
  //   required: true,
  //   default: ["STUDENT"],
  // },
  // accountStatus: {
  //   type: String,
  //   enum: ["ACTIVE", "PENDING", "REJECTED"],
  //   default: "ACTIVE",
  //   required: true,
  //},
});
const User = mongoose.model("User", userSchema);
module.exports = User;
