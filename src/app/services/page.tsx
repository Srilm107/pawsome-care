"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Sample services data
const services = [{
  id: 1,
  name: "Pet Grooming",
  description: "Professional grooming services for dogs and cats of all breeds and sizes. Includes bath, haircut, nail trimming, ear cleaning, and more.",
  image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  price: "From $45",
  duration: "1-2 hours",
  availability: "Mon-Sat, 9am-5pm"
}, {
  id: 2,
  name: "Veterinary Check-up",
  description: "Comprehensive health check-ups for your pets. Our experienced veterinarians will examine your pet and provide recommendations for their health and wellbeing.",
  image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  price: "From $75",
  duration: "30-45 minutes",
  availability: "Mon-Fri, 10am-4pm"
}, {
  id: 3,
  name: "Pet Training",
  description: "Behavior training and obedience classes for dogs of all ages. Our certified trainers use positive reinforcement techniques to help your pet learn commands and improve behavior.",
  image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  price: "From $60 per session",
  duration: "1 hour",
  availability: "Tue-Sun, various times"
}, {
  id: 4,
  name: "Pet Boarding",
  description: "Safe and comfortable boarding facilities for when you're away. Your pet will receive care, attention, regular meals, and exercise in a clean and monitored environment.",
  image: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  price: "From $35 per night",
  duration: "Overnight or longer",
  availability: "7 days a week"
}, {
  id: 5,
  name: "Pet Dental Care",
  description: "Dental cleaning and oral health services for pets. Helps prevent dental disease and maintains your pet's overall health with professional teeth cleaning and oral examination.",
  image: "https://picsum.photos/200",
  price: "From $120",
  duration: "1-2 hours",
  availability: "Mon, Wed, Fri, 9am-3pm"
}, {
  id: 6,
  name: "Pet Daycare",
  description: "Supervised daycare services for pets while you're at work or busy. Includes playtime, socialization with other pets, meals, and rest periods in a safe environment.",
  image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  price: "From $25 per day",
  duration: "Full or half day",
  availability: "Mon-Fri, 7am-7pm"
}];
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    petName: "",
    petType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedService(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        petName: "",
        petType: "",
        message: ""
      });
    }, 3000);
  };
  return <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-12">
        <Image src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Pet Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">Professional Pet Services</h1>
            <p className="text-white/90 text-lg max-w-md">
              Expert care for your furry, feathered, and scaly friends
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <Card key={service.id} className="overflow-hidden h-full">
              <div className="relative h-[200px]">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-medium w-24">Price:</span>
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium w-24">Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium w-24">Available:</span>
                    <span>{service.availability}</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => setSelectedService(service.id)}>
                  Book Now
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
      
      {/* Booking Form */}
      {selectedService !== null && !isSubmitted && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  Book {services.find(s => s.id === selectedService)?.name}
                </h3>
                <button onClick={() => setSelectedService(null)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Date</label>
                    <Input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Time</label>
                    <select name="time" value={formData.time} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pet Type</label>
                    <select name="petType" value={formData.petType} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select pet type</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Bird">Bird</option>
                      <option value="Small Animal">Small Animal</option>
                      <option value="Reptile">Reptile</option>
                      <option value="Fish">Fish</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Pet's Name</label>
                  <Input type="text" name="petName" value={formData.petName} onChange={handleInputChange} required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Information</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full border border-gray-300 rounded-md p-2" placeholder="Please provide any additional details about your pet or specific service needs."></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Booking Request
                </Button>
              </form>
            </div>
          </div>
        </div>}
      
      {/* Success Message */}
      {isSubmitted && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Booking Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your booking request. We'll contact you shortly to confirm your appointment.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Close
            </Button>
          </div>
        </div>}
      
      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-pet-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
            <p className="text-gray-600">
              Our team consists of certified veterinarians, groomers, and trainers with years of experience in pet care.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-pet-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Convenient Scheduling</h3>
            <p className="text-gray-600">
              Flexible appointment times, including evenings and weekends, to accommodate your busy schedule.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-pet-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pet-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
            <p className="text-gray-600">
              We treat each pet as an individual, providing customized care based on their specific needs and temperament.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">How do I prepare my pet for grooming?</h3>
            <p className="text-gray-600">
              It's helpful to brush your pet before their appointment to remove loose fur and tangles. Make sure they've had a chance to use the bathroom before arriving. If your pet is anxious about grooming, you can bring their favorite toy or treat to help them feel more comfortable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">What vaccinations are required for boarding?</h3>
            <p className="text-gray-600">
              For dogs, we require current vaccinations for Rabies, Distemper, Parvovirus, and Bordetella (kennel cough). For cats, we require Rabies and FVRCP. Please bring vaccination records to your first boarding appointment or have your veterinarian send them to us in advance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">How long does a typical training session last?</h3>
            <p className="text-gray-600">
              Our standard training sessions are one hour long. This includes time for instruction, practice, and feedback. We recommend weekly sessions for most pets, with daily practice at home between sessions for the best results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Do you offer emergency veterinary services?</h3>
            <p className="text-gray-600">
              Our regular veterinary services are by appointment only. For emergencies outside of our regular hours, we recommend contacting the 24-hour emergency pet hospital at (555) 123-4567. For urgent but non-life-threatening issues during business hours, please call us and we'll do our best to accommodate you.
            </p>
          </div>
        </div>
      </div>
    </div>;
}