import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
});

const Owner = mongoose.model("Owner", OwnerSchema);

export default Owner;
