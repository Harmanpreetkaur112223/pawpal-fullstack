import React from 'react'

function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 leading-relaxed">
          <h1 className="text-4xl text-gray-700 text-center mb-6">About PawPal</h1>
          <p className="mb-6">
            Welcome to PawPal, your trusted platform for pet adoption! At PawPal, we believe every pet deserves a loving home, and every person deserves the joy of a furry companion. Our mission is to connect adoptable pets with caring families, making the adoption process simple, transparent, and rewarding.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-2xl text-gray-700 mb-4">Our Mission</h2>
            <p className="mb-4">
              We are dedicated to reducing the number of homeless pets by facilitating adoptions and promoting responsible pet ownership. By partnering with local shelters and rescue organizations, we showcase pets in need of homes and provide resources to ensure successful adoptions. Our goal is to create lasting bonds between pets and their new families while advocating for animal welfare.
            </p>
          </div>

          <h2 className="text-2xl text-gray-700 mb-4">What We Do</h2>
          <p className="mb-4">PawPal is more than just a website—it's a community of pet lovers. We offer:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>A user-friendly platform to browse adoptable pets by species, breed, age, and location.</li>
            <li>Detailed profiles for each pet, including their personality, health, and adoption requirements.</li>
            <li>Educational resources on pet care, training, and responsible ownership.</li>
            <li>Support for shelters and rescues to reach a wider audience.</li>
          </ul>

          <h2 className="text-2xl text-gray-700 mb-4">Our Story</h2>
          <p className="mb-6">
            PawPal was founded in 2023 by a group of passionate animal lovers who saw a need for a better way to connect pets with potential adopters. Frustrated by outdated adoption processes and scattered information, we created PawPal to streamline the experience and bring joy to both pets and people. Since then, we’ve helped thousands of pets find their forever homes and continue to grow our network of shelters and adopters.
          </p>

          <h2 className="text-2xl text-gray-700 mb-4">Why Choose PawPal?</h2>
          <p className="mb-6">
            We’re committed to making a difference, one adoption at a time. Whether you’re looking to adopt, volunteer, or support our cause, PawPal is here to guide you every step of the way. Our platform is designed with love, care, and a deep commitment to animal welfare, ensuring that every pet finds a home and every adopter finds their perfect match.
          </p>

          <div className="text-center">
            <h2 className="text-2xl text-gray-700 mb-4">Meet Our Team</h2>
            <p className="mb-6">
              Our team is made up of dedicated individuals who share a passion for animals and a vision for a world where every pet has a home. Get to know the people behind PawPal!
            </p>
            {/* Add team member photos and bios here */}
          </div>

          <h2 className="text-2xl text-gray-700 mb-4">Join Us</h2>
          <p className="mb-6">
            Ready to make a difference? Browse our adoptable pets, volunteer with a local shelter, or spread the word about PawPal. Together, we can create a brighter future for pets and the people who love them.
          </p>
        </div>
    </div>
  )
}

export default About