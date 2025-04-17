"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import blog posts data from the blog page
const blogPosts = [
  {
    id: 1,
    title: "Essential Nutrition Tips for Your Dog",
    excerpt: "Learn about the key nutrients your dog needs for optimal health and how to ensure their diet provides everything they need to thrive.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Sarah Johnson",
    date: "April 15, 2025",
    category: "Nutrition",
    tags: ["dogs", "nutrition", "health"],
    content: `
      <p>Proper nutrition is the foundation of your dog's health and wellbeing. Just like humans, dogs require a balanced diet with the right nutrients to support their growth, maintain their health, and prevent disease.</p>
      
      <h3>Key Nutrients for Dogs</h3>
      
      <p>Every dog's diet should include these essential nutrients:</p>
      
      <ul>
        <li><strong>Protein:</strong> The building block for cells, tissues, organs, and muscles. Good sources include meat, poultry, fish, and eggs.</li>
        <li><strong>Fats:</strong> Provide energy and help absorb certain vitamins. They also contribute to healthy skin and coat.</li>
        <li><strong>Carbohydrates:</strong> Supply energy and support gut health. Sources include grains and vegetables.</li>
        <li><strong>Vitamins and Minerals:</strong> Essential for various bodily functions, from bone growth to blood clotting.</li>
        <li><strong>Water:</strong> Often overlooked but critical for all bodily functions.</li>
      </ul>
      
      <h3>Feeding Guidelines</h3>
      
      <p>The amount to feed your dog depends on their age, size, breed, and activity level. As a general rule:</p>
      
      <ul>
        <li>Puppies need more calories per pound than adult dogs</li>
        <li>Active dogs need more calories than sedentary ones</li>
        <li>Senior dogs typically need fewer calories but may need more of certain nutrients</li>
      </ul>
      
      <p>Always follow the feeding guidelines on your dog's food packaging as a starting point, and adjust based on your dog's individual needs and your veterinarian's recommendations.</p>
      
      <h3>Signs of Good Nutrition</h3>
      
      <p>A well-nourished dog will show these signs:</p>
      
      <ul>
        <li>Healthy weight</li>
        <li>Shiny coat</li>
        <li>Good energy levels</li>
        <li>Regular bowel movements</li>
        <li>Good dental health</li>
      </ul>
      
      <p>If you notice changes in your dog's appearance or behavior, it could be related to their diet. Consult with your veterinarian if you have concerns about your dog's nutrition.</p>
      
      <h3>Common Nutrition Mistakes</h3>
      
      <p>Avoid these common feeding errors:</p>
      
      <ul>
        <li>Overfeeding - leading to obesity</li>
        <li>Feeding too many treats</li>
        <li>Feeding foods toxic to dogs (chocolate, grapes, onions, etc.)</li>
        <li>Sudden diet changes</li>
        <li>Ignoring age-specific nutritional needs</li>
      </ul>
      
      <p>Remember, every dog is unique. What works for one may not work for another. Work with your veterinarian to develop a nutrition plan tailored to your dog's specific needs.</p>
    `
  },
  {
    id: 2,
    title: "Understanding Cat Behavior: What Your Feline Friend is Trying to Tell You",
    excerpt: "Decode your cat's mysterious behaviors and learn how to better communicate with your feline companion through understanding their body language and vocalizations.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Feline Behavior Specialist Emily Chen",
    date: "April 10, 2025",
    category: "Behavior",
    tags: ["cats", "behavior", "communication"],
    content: `
      <p>Cats may seem mysterious, but they're actually communicating with us all the time through their body language, vocalizations, and behaviors. Learning to understand what your cat is trying to tell you can strengthen your bond and help you better meet their needs.</p>
      
      <h3>Body Language Basics</h3>
      
      <p>Your cat's body is constantly giving you information about how they're feeling:</p>
      
      <ul>
        <li><strong>Tail:</strong> A high, gently swaying tail indicates confidence and contentment. A puffed tail means fear or aggression. A low or tucked tail suggests anxiety or submission.</li>
        <li><strong>Ears:</strong> Forward-facing ears show interest and contentment. Flattened ears signal fear or aggression.</li>
        <li><strong>Eyes:</strong> Slow blinks are "cat kisses" - signs of trust and affection. Dilated pupils can indicate excitement or fear.</li>
        <li><strong>Posture:</strong> An arched back with raised fur is defensive. A relaxed, loose posture shows comfort.</li>
      </ul>
      
      <h3>Decoding Common Behaviors</h3>
      
      <p>Many cat behaviors that seem puzzling actually have clear meanings:</p>
      
      <ul>
        <li><strong>Kneading:</strong> This "making biscuits" behavior is a leftover from kittenhood and indicates contentment.</li>
        <li><strong>Bringing you "gifts":</strong> When your cat brings you toys or (unfortunately) dead animals, they're showing affection and trying to teach you hunting skills.</li>
        <li><strong>Scratching furniture:</strong> This natural behavior marks territory and maintains claw health.</li>
        <li><strong>Hiding:</strong> Cats hide when stressed, ill, or simply wanting some alone time.</li>
      </ul>
      
      <h3>Understanding Vocalizations</h3>
      
      <p>Cats have a wide vocal repertoire:</p>
      
      <ul>
        <li><strong>Purring:</strong> Usually indicates contentment, but cats may also purr when in pain or stressed as a self-soothing mechanism.</li>
        <li><strong>Meowing:</strong> Adult cats primarily meow to communicate with humans, not other cats. Different pitches and lengths convey different messages.</li>
        <li><strong>Chirping/Chattering:</strong> Often seen when watching birds or prey, this may be excitement or frustration.</li>
        <li><strong>Hissing/Growling:</strong> Clear signs of fear, discomfort, or aggression.</li>
      </ul>
      
      <h3>Responding Appropriately</h3>
      
      <p>Once you understand what your cat is communicating, you can respond in ways that build trust:</p>
      
      <ul>
        <li>Respect their space when they signal they want to be alone</li>
        <li>Provide appropriate outlets for natural behaviors (scratching posts, hunting toys)</li>
        <li>Recognize signs of stress or illness early</li>
        <li>Return slow blinks to show affection</li>
        <li>Create predictable routines that help cats feel secure</li>
      </ul>
      
      <p>Remember that each cat has their own unique personality and communication style. The more time you spend observing your cat, the better you'll become at understanding their particular language.</p>
    `
  },
  {
    id: 3,
    title: "Small Pet Care: A Guide to Keeping Hamsters, Guinea Pigs, and Rabbits",
    excerpt: "Everything you need to know about caring for popular small pets, from housing and nutrition to handling and health concerns.",
    image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Small Animal Specialist Mark Rodriguez",
    date: "April 5, 2025",
    category: "Care Guides",
    tags: ["small pets", "hamsters", "guinea pigs", "rabbits"],
    content: `
      <p>Small pets like hamsters, guinea pigs, and rabbits make wonderful companions. They're relatively low-maintenance compared to dogs and cats, but they still require proper care to thrive. This guide covers the essentials of small pet care.</p>
      
      <h3>Housing Requirements</h3>
      
      <p>Each small pet has specific housing needs:</p>
      
      <ul>
        <li><strong>Hamsters:</strong> Need at least 450 square inches of floor space. Wire cages with small bar spacing or glass tanks with proper ventilation work well. Include a solid exercise wheel (8"+ for Syrian hamsters), hideouts, and bedding at least 6" deep for burrowing.</li>
        <li><strong>Guinea Pigs:</strong> Require at least 7.5 square feet for two guinea pigs (they should be kept in pairs). Use solid-bottom cages with paper-based or fleece bedding. Provide hideouts and toys.</li>
        <li><strong>Rabbits:</strong> Need at minimum 8-12 square feet of enclosure space plus at least 24 square feet of exercise space. Rabbits can be cage-free in rabbit-proofed rooms. Provide hiding spots and toys for mental stimulation.</li>
      </ul>
      
      <h3>Nutrition Basics</h3>
      
      <p>Proper nutrition is crucial for small pets:</p>
      
      <ul>
        <li><strong>Hamsters:</strong> Omnivores that need a high-quality hamster mix supplemented with fresh vegetables and occasional fruits. Protein sources like mealworms or plain cooked chicken can be offered in small amounts.</li>
        <li><strong>Guinea Pigs:</strong> Herbivores requiring unlimited timothy hay (alfalfa only for young or pregnant guinea pigs), guinea pig pellets, and daily vegetables. Guinea pigs cannot produce Vitamin C, so they need foods rich in this vitamin daily.</li>
        <li><strong>Rabbits:</strong> Herbivores needing unlimited timothy hay (80% of diet), limited pellets, and daily leafy greens. Fruits should be occasional treats only.</li>
      </ul>
      
      <h3>Handling and Socialization</h3>
      
      <p>Proper handling builds trust with your small pet:</p>
      
      <ul>
        <li><strong>Hamsters:</strong> Scoop from below rather than grabbing from above. Handle gently and close to a surface in case they jump. Most active in evenings.</li>
        <li><strong>Guinea Pigs:</strong> Support their bottom when lifting. Socialize daily as they're very social animals. They communicate with various vocalizations.</li>
        <li><strong>Rabbits:</strong> Never pick up by the ears. Support their hindquarters when lifting to prevent spinal injuries. Rabbits can be litter-trained and may enjoy free-roaming time.</li>
      </ul>
      
      <h3>Common Health Concerns</h3>
      
      <p>Watch for these health issues:</p>
      
      <ul>
        <li><strong>Hamsters:</strong> Wet tail (diarrhea), respiratory infections, tumors in older hamsters</li>
        <li><strong>Guinea Pigs:</strong> Vitamin C deficiency (scurvy), upper respiratory infections, bladder stones</li>
        <li><strong>Rabbits:</strong> GI stasis, dental problems, flystrike</li>
      </ul>
      
      <p>All small pets benefit from finding an exotic pet veterinarian before health issues arise. Regular health checks can catch problems early.</p>
      
      <h3>Environmental Enrichment</h3>
      
      <p>Small pets need mental stimulation:</p>
      
      <ul>
        <li>Provide toys appropriate for each species</li>
        <li>Rotate toys to maintain interest</li>
        <li>Create foraging opportunities by hiding treats</li>
        <li>Offer safe materials for chewing (essential for dental health)</li>
        <li>Consider supervised exploration outside the cage in a safe area</li>
      </ul>
      
      <p>With proper care, small pets can live full, healthy lives and become beloved family members. Research the specific needs of your pet's species and consult with exotic pet veterinarians for the best advice tailored to your pet.</p>
    `
  },
  {
    id: 4,
    title: "Aquarium Basics: Setting Up Your First Fish Tank",
    excerpt: "A step-by-step guide to setting up and maintaining a healthy aquarium for beginners, including equipment selection, cycling, and fish selection.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Aquatics Expert James Wilson",
    date: "March 28, 2025",
    category: "Aquatics",
    tags: ["fish", "aquarium", "beginners"],
    content: `
      <p>Setting up your first aquarium can be an exciting but sometimes overwhelming experience. This guide will walk you through the process step by step to help you create a healthy, thriving underwater environment for your fish.</p>
      
      <h3>Choosing Your Equipment</h3>
      
      <p>Start with these essential components:</p>
      
      <ul>
        <li><strong>Tank:</strong> For beginners, a 20-gallon tank is recommended as a minimum. Larger tanks are actually easier to maintain stable water conditions than smaller ones.</li>
        <li><strong>Filter:</strong> Choose a filter rated for your tank size or larger. Hang-on-back filters are good for beginners.</li>
        <li><strong>Heater:</strong> Most tropical fish need water between 75-80°F. Choose a heater with 5 watts per gallon capacity.</li>
        <li><strong>Lighting:</strong> LED lights are energy-efficient and don't add heat to the water.</li>
        <li><strong>Substrate:</strong> Gravel or sand, depending on your fish species.</li>
        <li><strong>Decorations:</strong> Caves, plants (live or artificial), and other items that provide hiding places.</li>
        <li><strong>Water conditioner:</strong> Removes chlorine and chloramine from tap water.</li>
        <li><strong>Test kit:</strong> To monitor ammonia, nitrite, nitrate, and pH levels.</li>
      </ul>
      
      <h3>Setting Up Your Tank</h3>
      
      <p>Follow these steps in order:</p>
      
      <ol>
        <li>Place the empty tank on a sturdy, level surface away from direct sunlight and drafts.</li>
        <li>Rinse substrate thoroughly and add to the tank.</li>
        <li>Install equipment (filter, heater) but don't plug in yet.</li>
        <li>Add decorations and plants.</li>
        <li>Fill with water treated with water conditioner, using a plate on the substrate to prevent disruption.</li>
        <li>Turn on equipment and ensure everything works properly.</li>
      </ol>
      
      <h3>The Nitrogen Cycle</h3>
      
      <p>Before adding fish, you must cycle your tank:</p>
      
      <ol>
        <li>Add a source of ammonia (fish food, pure ammonia, or a fish-less cycling product).</li>
        <li>Test water regularly. You'll see ammonia rise, then nitrite, then finally nitrate.</li>
        <li>When ammonia and nitrite read zero and nitrate is present, your tank is cycled.</li>
        <li>This process takes 4-6 weeks. Be patient - adding fish too early often leads to fish loss.</li>
      </ol>
      
      <h3>Choosing Fish</h3>
      
      <p>Research before buying:</p>
      
      <ul>
        <li>Choose fish compatible in temperament and water parameter requirements.</li>
        <li>Start with hardy species like tetras, danios, or platies.</li>
        <li>Add fish gradually - a few at a time with weeks in between.</li>
        <li>Don't overstock - a general rule is one inch of fish per gallon of water.</li>
      </ul>
      
      <h3>Maintenance Routine</h3>
      
      <p>Regular maintenance keeps your aquarium healthy:</p>
      
      <ul>
        <li>Weekly water changes of 25-30%</li>
        <li>Regular water testing</li>
        <li>Filter maintenance as recommended by manufacturer</li>
        <li>Gravel vacuuming during water changes</li>
        <li>Daily observation of fish for signs of disease or stress</li>
      </ul>
      
      <p>Remember that patience is key in the aquarium hobby. Take your time, research thoroughly, and enjoy the process of creating your underwater world.</p>
    `
  },
  {
    id: 5,
    title: "Bird Care 101: Creating a Happy Home for Your Feathered Friend",
    excerpt: "Learn how to provide the best care for pet birds, from cage setup and nutrition to socialization and enrichment activities.",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Avian Specialist Dr. Michael Brown",
    date: "March 20, 2025",
    category: "Bird Care",
    tags: ["birds", "parakeets", "canaries", "finches"],
    content: `
      <p>Birds make fascinating and rewarding pets, but they have specialized care requirements that differ significantly from mammals. Whether you have a budgie, canary, cockatiel, or larger parrot, understanding these needs is essential for your bird's health and happiness.</p>
      
      <h3>Creating the Ideal Habitat</h3>
      
      <p>Your bird's cage is their primary environment:</p>
      
      <ul>
        <li><strong>Size:</strong> The cage should be large enough for your bird to fully extend its wings and fly short distances. Bigger is always better.</li>
        <li><strong>Bar spacing:</strong> Appropriate for your bird's size to prevent escape or injury.</li>
        <li><strong>Shape:</strong> Rectangular cages provide more flying space than round ones.</li>
        <li><strong>Placement:</strong> Position the cage against a wall (not in the center of a room) at eye level in a room where the family gathers, but away from drafts, direct sunlight, and kitchen fumes.</li>
        <li><strong>Perches:</strong> Provide various diameters and textures to exercise feet and prevent foot problems.</li>
        <li><strong>Toys:</strong> Include a variety of safe toys that encourage natural behaviors like chewing, foraging, and problem-solving.</li>
      </ul>
      
      <h3>Nutrition Requirements</h3>
      
      <p>A balanced diet is crucial for birds:</p>
      
      <ul>
        <li><strong>Seed mixes:</strong> While convenient, seeds should not be the only food offered as they're high in fat and low in many nutrients.</li>
        <li><strong>Pellets:</strong> High-quality formulated pellets should make up 50-70% of most birds' diets.</li>
        <li><strong>Fresh foods:</strong> Offer a variety of vegetables and limited fruits daily. Dark leafy greens are especially nutritious.</li>
        <li><strong>Treats:</strong> Offer in moderation. Nuts are high in fat but good for larger parrots in limited quantities.</li>
        <li><strong>Clean water:</strong> Change daily and clean containers to prevent bacterial growth.</li>
      </ul>
      
      <h3>Socialization and Mental Stimulation</h3>
      
      <p>Birds are highly intelligent and social:</p>
      
      <ul>
        <li>Spend time daily interacting with your bird outside its cage (in a safe, bird-proofed room)</li>
        <li>Talk to your bird regularly - many species enjoy "conversations"</li>
        <li>Rotate toys weekly to maintain interest</li>
        <li>Provide foraging opportunities by hiding treats in toys</li>
        <li>Consider training sessions using positive reinforcement</li>
        <li>For social species, consider a companion bird if you cannot provide several hours of interaction daily</li>
      </ul>
      
      <h3>Health Considerations</h3>
      
      <p>Preventative care is essential:</p>
      
      <ul>
        <li>Find an avian veterinarian before emergencies arise</li>
        <li>Schedule annual check-ups</li>
        <li>Watch for signs of illness: fluffed feathers, lethargy, changes in droppings, decreased appetite, labored breathing</li>
        <li>Bird-proof your home: avoid non-stick cookware fumes, scented candles, cigarette smoke, and toxic plants</li>
        <li>Maintain proper humidity and temperature</li>
      </ul>
      
      <h3>Understanding Bird Behavior</h3>
      
      <p>Birds communicate through body language:</p>
      
      <ul>
        <li>Fluffed feathers can indicate contentment or illness, depending on context</li>
        <li>Regurgitation for you is a sign of affection</li>
        <li>Head bobbing often indicates excitement</li>
        <li>Beak grinding usually means contentment and relaxation</li>
        <li>Pinned (dilated) pupils can signal excitement or fear</li>
      </ul>
      
      <p>Remember that birds are not domesticated animals like dogs and cats - they retain many of their wild instincts. Respecting their nature while providing appropriate care will help you develop a rewarding relationship with your feathered friend.</p>
    `
  },
  {
    id: 6,
    title: "Reptile Care Essentials: Setting Up the Perfect Habitat",
    excerpt: "A comprehensive guide to creating and maintaining appropriate environments for common pet reptiles, focusing on temperature, lighting, and habitat design.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    author: "Herpetologist Dr. Lisa Taylor",
    date: "March 15, 2025",
    category: "Reptiles",
    tags: ["reptiles", "lizards", "snakes", "turtles"],
    content: `
      <p>Reptiles have specialized environmental needs that must be met for them to thrive in captivity. Unlike mammals, they rely on external heat sources to regulate their body temperature and have specific requirements for lighting, humidity, and habitat setup. This guide covers the essentials of reptile habitat creation.</p>
      
      <h3>Understanding Temperature Requirements</h3>
      
      <p>Reptiles need temperature gradients:</p>
      
      <ul>
        <li><strong>Thermal gradient:</strong> Create a range of temperatures within the enclosure, allowing your reptile to thermoregulate by moving between warmer and cooler areas.</li>
        <li><strong>Basking spot:</strong> Provide a focused heat source (lamp or ceramic heater) that creates a basking area at the high end of your species' preferred temperature range.</li>
        <li><strong>Night temperatures:</strong> Most reptiles can tolerate a temperature drop at night, but research your specific species' needs.</li>
        <li><strong>Measuring temperature:</strong> Use multiple thermometers placed at different heights and locations to accurately monitor temperatures throughout the enclosure.</li>
      </ul>
      
      <h3>Lighting Considerations</h3>
      
      <p>Proper lighting is crucial:</p>
      
      <ul>
        <li><strong>UVB lighting:</strong> Essential for most diurnal (day-active) reptiles for vitamin D3 synthesis and calcium metabolism. Different species require different UVB strengths.</li>
        <li><strong>Day/night cycle:</strong> Maintain a consistent photoperiod of 10-12 hours of light and 12-14 hours of darkness.</li>
        <li><strong>Visible light:</strong> Provides environmental cues and allows natural behaviors.</li>
        <li><strong>Replace UVB bulbs:</strong> UVB output diminishes over time, even if the bulb still produces visible light. Replace according to manufacturer recommendations, typically every 6-12 months.</li>
      </ul>
      
      <h3>Humidity and Water</h3>
      
      <p>Different reptiles have different moisture needs:</p>
      
      <ul>
        <li><strong>Desert species:</strong> Typically require 10-30% humidity with occasional spikes during shedding.</li>
        <li><strong>Tropical species:</strong> Often need 50-80% humidity or higher.</li>
        <li><strong>Water features:</strong> Some species benefit from a water dish large enough to soak in, while others may need misting or a drip system.</li>
        <li><strong>Monitoring humidity:</strong> Use a hygrometer to measure humidity levels.</li>
        <li><strong>Creating humidity:</strong> Misting, larger water dishes, moisture-retaining substrates, and reduced ventilation can increase humidity.</li>
      </ul>
      
      <h3>Enclosure Size and Setup</h3>
      
      <p>Appropriate space and furnishings are essential:</p>
      
      <ul>
        <li><strong>Size:</strong> The enclosure should allow your reptile to fully extend its body and move around comfortably. Consider adult size when purchasing for juveniles.</li>
        <li><strong>Substrate:</strong> Choose based on species needs - options include reptile carpet, paper towels, bioactive soil mixes, play sand, and more.</li>
        <li><strong>Hides:</strong> Provide multiple hiding spots in both warm and cool areas.</li>
        <li><strong>Climbing opportunities:</strong> Arboreal species need vertical space with secure branches and platforms.</li>
        <li><strong>Visual barriers:</strong> Some reptiles experience stress if they can see other reptiles or their own reflection.</li>
      </ul>
      
      <h3>Species-Specific Considerations</h3>
      
      <p>Research your particular reptile's needs:</p>
      
      <ul>
        <li><strong>Bearded Dragons:</strong> Need high UVB, basking temperatures of 95-105°F, and moderate humidity of 30-40%.</li>
        <li><strong>Leopard Geckos:</strong> Require a heat mat rather than overhead heating, minimal UVB, and a dry environment with a humid hide.</li>
        <li><strong>Ball Pythons:</strong> Thrive with ambient temperatures of 75-80°F, a warm side of 88-92°F, and humidity around 50-60%.</li>
        <li><strong>Red-Eared Sliders:</strong> Need a large water area for swimming, a dry basking area with UVB, and water filtration.</li>
      </ul>
      
      <h3>Maintenance Schedule</h3>
      
      <p>Regular maintenance keeps habitats healthy:</p>
      
      <ul>
        <li>Daily: Spot clean waste, refresh water, check temperatures</li>
        <li>Weekly: More thorough cleaning of surfaces, substrate maintenance</li>
        <li>Monthly: Deep clean of décor, check and replace UVB bulbs as needed</li>
        <li>Quarterly: Complete habitat breakdown and disinfection</li>
      </ul>
      
      <p>Remember that each reptile species has evolved for specific environmental conditions. Taking the time to research and recreate these conditions as accurately as possible will result in a healthier, more active pet that displays natural behaviors.</p>
    `
  }
];

// Get related posts based on tags and category
const getRelatedPosts = (currentId: number, currentTags: string[], currentCategory: string) => {
  return blogPosts
    .filter(post => 
      post.id !== currentId && 
      (post.category === currentCategory || post.tags.some(tag => currentTags.includes(tag)))
    )
    .slice(0, 3);
};

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params?.id as string, 10);
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // Find the post by ID
    const foundPost = blogPosts.find(p => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(postId, foundPost.tags, foundPost.category));
    }
  }, [postId]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-pet-primary hover:underline">
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>
      
      {/* Article Header */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-8 w-full">
            <div className="flex items-center text-white/80 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Links */}
            <div className="border-t mt-8 pt-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Share2 className="h-4 w-4 mr-2" /> Share this article
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          {/* Author Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-4">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-medium">{post.author}</h4>
                <p className="text-sm text-gray-600">Pet Care Expert</p>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {["Nutrition", "Behavior", "Care Guides", "Aquatics", "Bird Care", "Reptiles"].map((category) => (
                <Link 
                  key={category} 
                  href={`/blog?category=${category}`}
                  className={`px-3 py-1 rounded-full text-sm ${
                    category === post.category 
                      ? "bg-pet-primary text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Related Articles</h3>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block">
                  <div className="flex items-start">
                    <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-pet-primary">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
              
              {relatedPosts.length === 0 && (
                <p className="text-sm text-gray-500">No related articles found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
