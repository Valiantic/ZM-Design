import React, { useState } from 'react';

// IMAGES
import SunlightLounge from '../../assets/images/projects/sunlight_lounge.png';
import NaturalisticLiving from '../../assets/images/projects/naturalistic_living.jpg';
import FlatRoof from '../../assets/images/projects/flat_roof.jpg';
import NaturaliscDining from '../../assets/images/projects/naturalistic_dining.png';
import FloralLiving from '../../assets/images/projects/floral_living.png';
import WarmFlat from '../../assets/images/projects/warm_flat.png';
import ShadyFlat from '../../assets/images/projects/shady_flat.png';
import NaturalisticFlat from '../../assets/images/projects/naturalistic_flat.png';

import AestheticKitchem from '../../assets/images/projects/aesthetic_kitchen.png';
import CoolDinning from '../../assets/images/projects/cool_dinning.png';
import CoolKitchen from '../../assets/images/projects/cool_kitchen.png';
import DinningRoom from '../../assets/images/projects/dinning_room.png';
import FloralComplex from '../../assets/images/projects/floral_complex.png';
import FreshDining from '../../assets/images/projects/fresh_dining.png';
import FreshKitchen from '../../assets/images/projects/fresh_kitchen.png';
import LivingRoom from '../../assets/images/projects/living_room.png';
import MarbleKitchen from '../../assets/images/projects/marble_kitchen.png';
import OutlanderFlat from '../../assets/images/projects/outlander_flat.png';
import RestRoom from '../../assets/images/projects/restroom.png';
import WarmLiving from '../../assets/images/projects/warm_living.png';
import WhiteDining from '../../assets/images/projects/white_dining.png';
import WhiteFridge from '../../assets/images/projects/white_fridge.png';
import CozyLiving from '../../assets/images/projects/cozy_living.png';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: SunlightLounge,
      alt: 'Project Highlight'
    },
    {
      url: NaturalisticLiving,
      alt: 'Project Highlight'
    },
    {
      url: FlatRoof,
      alt: 'Project Highlight'
    },
    {
      url: NaturaliscDining,
      alt: 'Project Highlight'
    },
    {
      url: FloralLiving,
      alt: 'Project Highlight'
    },
    {
      url: ShadyFlat,
      alt: 'Project Highlight'
    },
    {
      url: NaturalisticFlat,
      alt: 'Project Highlight'
    },
    {
      url: WarmFlat,
      alt: 'Project Highlight'
    },
    {
      url: AestheticKitchem,
      alt: 'Project Highlight'
    },
    {
      url: CoolDinning,
      alt: 'Project Highlight'
    },
    {
      url: CoolKitchen,
      alt: 'Project Highlight'
    },
    {
      url: DinningRoom,
      alt: 'Project Highlight'
    },
    {
      url: FloralComplex,
      alt: 'Project Highlight'
    },
    {
      url: FreshDining,
      alt: 'Project Highlight'
    },
    {
      url: FreshKitchen,
      alt: 'Project Highlight'
    },
    {
      url: LivingRoom,
      alt: 'Project Highlight'
    },
    {
      url: MarbleKitchen,
      alt: 'Project Highlight'
    },
    {
      url: OutlanderFlat,
      alt: 'Project Highlight'
    },
    {
      url: RestRoom,
      alt: 'Project Highlight'
    },
    {
      url: WarmLiving,
      alt: 'Project Highlight'
    },
    {
      url: WhiteDining,
      alt: 'Project Highlight'
    },
    {
      url: WhiteFridge,
      alt: 'Project Highlight'
    },
    {
      url: CozyLiving,
      alt: 'Project Highlight'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-black mt-20">
      {/* Title */}
      <h2 
        className="text-5xl text-center font-semibold text-white px-8 py-6 font-['Poppins']"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        My <span className='text-amber-200 text-bold font-bold'>Projects</span>
      </h2>

      {/* Main Image Container */}
      <div className="relative w-full">
        <div className="aspect-[16/9] w-full">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full transition-colors text-black"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full transition-colors text-black"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;