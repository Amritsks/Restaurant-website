import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Customer name is required"],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true
  },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, default: "India" }
  },
  items: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  orderStatus: {
    type: String,
    enum: ["pending", "confirmed", "preparing", "out_for_delivery", "delivered", "cancelled"],
    default: "pending"
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  estimatedDelivery: {
    type: Date
  }
}, {
  timestamps: true
});

// Create indexes for better performance
orderSchema.index({ email: 1 });
orderSchema.index({ orderDate: -1 });
orderSchema.index({ orderStatus: 1 });

// Calculate estimated delivery (45 minutes from order time)
orderSchema.pre('save', function(next) {
  if (this.isNew) {
    this.estimatedDelivery = new Date(Date.now() + 45 * 60 * 1000); // 45 minutes
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;