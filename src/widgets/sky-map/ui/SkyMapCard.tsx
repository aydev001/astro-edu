'use client';
import React from 'react';
import { Button } from '@/shared/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { SkyMapApp } from '../lib/data';
import Image from 'next/image';

type Props = {
  app: SkyMapApp;
};

const SkyAppCard: React.FC<Props> = ({ app }) => {
  return (
    <div className="border rounded-md shadow-sm hover:shadow-lg transition p-4 flex flex-col gap-3 bg-white">
      <Carousel className="w-full">
        <CarouselContent>
          {app.images.map((img, i) => (
            <CarouselItem key={i}>
              <Image
                width={300}
                height={300}
                src={img}
                alt={`${app.title} image ${i + 1}`}
                className="rounded-md w-full h-70 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        <h2 className="text-lg font-semibold mt-2">{app.title}</h2>
        <p className="text-sm text-gray-600">{app.description}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        <a
          href={app.androidLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full flex gap-2 justify-center"
          >
            <FaAndroid /> Google Play
          </Button>
        </a>
        <a
          href={app.iosLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full flex gap-2 justify-center"
          >
            <FaApple /> App Store
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SkyAppCard;
