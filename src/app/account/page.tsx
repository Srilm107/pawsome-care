"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(555) 123-4567",
  address: {
    street: "123 Main St",
    city: "Petville",
    state: "CA",
    zip: "12345",
    country: "USA"
  }
};

// Sample order history
const orderHistory = [{
  id: "ORD-2025-1234",
  date: "April 10, 2025",
  total: 124.99,
  status: "Delivered",
  items: [{
    name: "Premium Dog Food",
    quantity: 1,
    price: 29.99
  }, {
    name: "Interactive Dog Toy",
    quantity: 2,
    price: 14.99
  }, {
    name: "Dog Collar",
    quantity: 1,
    price: 19.99
  }, {
    name: "Luxury Pet Bed",
    quantity: 1,
    price: 79.99
  }]
}, {
  id: "ORD-2025-0987",
  date: "March 25, 2025",
  total: 64.97,
  status: "Delivered",
  items: [{
    name: "Cat Scratching Post",
    quantity: 1,
    price: 49.99
  }, {
    name: "Catnip Toys Set",
    quantity: 1,
    price: 12.99
  }, {
    name: "Cat Treats",
    quantity: 1,
    price: 7.99
  }]
}];

// Sample wishlist
const wishlistItems = [{
  id: 5,
  name: "Automatic Pet Feeder",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}, {
  id: 8,
  name: "Bird Cage",
  price: 129.99,
  image: "https://picsum.photos/200"
}];
export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  // Simulate checking if user is logged in
  useEffect(() => {
    // In a real app, you would check for a token in localStorage or cookies
    const checkLoginStatus = () => {
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(isUserLoggedIn);
    };
    checkLoginStatus();
  }, []);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials with your backend
    console.log("Login attempt with:", loginForm);

    // Simulate successful login
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    if (name.includes(".")) {
      // Handle nested objects (e.g., address.street)
      const [parent, child] = name.split(".");
      setEditedProfile(prev => {
        const parentObj = prev[parent as keyof typeof prev] as Record<string, string>;
        return {
          ...prev,
          [parent]: {
            ...parentObj,
            [child]: value
          }
        };
      });
    } else {
      setEditedProfile(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    // In a real app, you would send this data to your backend
    console.log("Profile updated:", editedProfile);
  };
  if (!isLoggedIn) {
    return <div className="container mx-auto px-4 py-12">
        <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Sign In to Your Account</h1>
            <p className="text-gray-600 mt-2">Access your orders, wishlist, and profile</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <Input type="email" name="email" value={loginForm.email} onChange={handleLoginInputChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input type="password" name="password" value={loginForm.password} onChange={handleLoginInputChange} required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-pet-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-pet-primary hover:underline">
                Create one
              </a>
            </p>
          </div>
        </div>
      </div>;
  }
  return <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b">
              <div className="bg-pet-primary/10 p-3 rounded-full">
                <User className="h-6 w-6 text-pet-primary" />
              </div>
              <div>
                <h2 className="font-semibold">{profile.name}</h2>
                <p className="text-sm text-gray-600">{profile.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button onClick={() => setActiveTab("profile")} className={`flex items-center space-x-3 w-full p-3 rounded-md ${activeTab === "profile" ? "bg-pet-primary text-white" : "hover:bg-gray-100"}`}>
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button onClick={() => setActiveTab("orders")} className={`flex items-center space-x-3 w-full p-3 rounded-md ${activeTab === "orders" ? "bg-pet-primary text-white" : "hover:bg-gray-100"}`}>
                <Package className="h-5 w-5" />
                <span>Order History</span>
              </button>
              <button onClick={() => setActiveTab("wishlist")} className={`flex items-center space-x-3 w-full p-3 rounded-md ${activeTab === "wishlist" ? "bg-pet-primary text-white" : "hover:bg-gray-100"}`}>
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </button>
              <button onClick={() => setActiveTab("settings")} className={`flex items-center space-x-3 w-full p-3 rounded-md ${activeTab === "settings" ? "bg-pet-primary text-white" : "hover:bg-gray-100"}`}>
                <Settings className="h-5 w-5" />
                <span>Account Settings</span>
              </button>
              <button onClick={handleLogout} className="flex items-center space-x-3 w-full p-3 rounded-md text-red-500 hover:bg-red-50">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {/* Profile Tab */}
            {activeTab === "profile" && <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  {!isEditing ? <Button variant="outline" onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button> : <div className="space-x-2">
                      <Button variant="outline" onClick={() => {
                  setIsEditing(false);
                  setEditedProfile(profile);
                }}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>
                        Save Changes
                      </Button>
                    </div>}
                </div>
                
                {!isEditing ? <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                        <p>{profile.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                        <p>{profile.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                        <p>{profile.phone}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                      <p>{profile.address.street}</p>
                      <p>{profile.address.city}, {profile.address.state} {profile.address.zip}</p>
                      <p>{profile.address.country}</p>
                    </div>
                  </div> : <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <Input type="text" name="name" value={editedProfile.name} onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <Input type="email" name="email" value={editedProfile.email} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input type="tel" name="phone" value={editedProfile.phone} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Street Address</label>
                          <Input type="text" name="address.street" value={editedProfile.address.street} onChange={handleInputChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">City</label>
                            <Input type="text" name="address.city" value={editedProfile.address.city} onChange={handleInputChange} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">State</label>
                            <Input type="text" name="address.state" value={editedProfile.address.state} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">ZIP Code</label>
                            <Input type="text" name="address.zip" value={editedProfile.address.zip} onChange={handleInputChange} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Country</label>
                            <Input type="text" name="address.country" value={editedProfile.address.country} onChange={handleInputChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
              </div>}
            
            {/* Orders Tab */}
            {activeTab === "orders" && <div>
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                
                {orderHistory.length > 0 ? <div className="space-y-6">
                    {orderHistory.map(order => <div key={order.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.total.toFixed(2)}</p>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-2">Items</h3>
                          <div className="space-y-2">
                            {order.items.map((item, index) => <div key={index} className="flex justify-between text-sm">
                                <span>{item.quantity}x {item.name}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>)}
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              View Order Details
                            </Button>
                          </div>
                        </div>
                      </div>)}
                  </div> : <div className="text-center py-12">
                    <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">No orders yet</h3>
                    <p className="text-gray-500 mb-6">
                      You haven't placed any orders yet.
                    </p>
                    <Link href="/products">
                      <Button>Start Shopping</Button>
                    </Link>
                  </div>}
              </div>}
            
            {/* Wishlist Tab */}
            {activeTab === "wishlist" && <div>
                <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                
                {wishlistItems.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlistItems.map(item => <div key={item.id} className="border rounded-lg overflow-hidden flex">
                        <div className="relative h-24 w-24">
                          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-pet-primary font-semibold">${item.price.toFixed(2)}</p>
                          <div className="mt-auto flex justify-between">
                            <Button size="sm">Add to Cart</Button>
                            <Button variant="outline" size="sm">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>)}
                  </div> : <div className="text-center py-12">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500 mb-6">
                      Save items you love to your wishlist.
                    </p>
                    <Link href="/products">
                      <Button>Explore Products</Button>
                    </Link>
                  </div>}
              </div>}
            
            {/* Settings Tab */}
            {activeTab === "settings" && <div>
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Current Password</label>
                        <Input type="password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">New Password</label>
                        <Input type="password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                        <Input type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </form>
                  </div>
                  
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4">Email Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input id="marketing" type="checkbox" className="h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded" />
                        <label htmlFor="marketing" className="ml-2 block text-sm text-gray-700">
                          Receive marketing emails about new products and promotions
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="order-updates" type="checkbox" className="h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded" defaultChecked />
                        <label htmlFor="order-updates" className="ml-2 block text-sm text-gray-700">
                          Receive order status updates
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="newsletter" type="checkbox" className="h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded" defaultChecked />
                        <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                          Subscribe to our newsletter
                        </label>
                      </div>
                    </div>
                    <Button className="mt-4">Save Preferences</Button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
                    <p className="text-gray-600 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}
