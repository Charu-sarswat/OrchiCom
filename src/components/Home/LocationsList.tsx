import React from 'react';
import Link from 'next/link';
import { locations } from '@/services/locationData';

const LocationsList = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container max-w-[1240px] mx-auto text-center">
        <h2 className="text-[2rem] md:text-[3.2rem] font-bold text-black mb-10 tracking-tight">
          <span className="text-primary">The Orchid Laundry Serving</span> {locations.length} Cities
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 max-w-[1100px] mx-auto">
          {locations.map((loc, index) => (
            <React.Fragment key={loc.slug}>
              <Link 
                href={`/services/dry-cleaning/${loc.slug}`}
                className="text-slate-600 hover:text-primary font-medium text-[0.95rem] transition-colors duration-300 no-underline"
              >
                {loc.name}
              </Link>
              {index < locations.length - 1 && (
                <span className="text-slate-300 font-light text-[0.9rem] flex items-center justify-center">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <p className="mt-12 text-slate-400 text-sm font-medium">
          Note: We also provide specialized services in neighboring areas of Thane and Navi Mumbai.
        </p>
      </div>
    </section>
  );
};

export default LocationsList;
