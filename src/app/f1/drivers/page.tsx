"use client";

import Link from 'next/link';

const drivers = [
  { slug: 'driver/RUS', firstName: 'George', lastName: 'Russell', team: 'Mercedes', number: 63, color: '#00A19C', image: '/RUS.png' },
  { slug: 'driver/ANT', firstName: 'Kimi', lastName: 'Antonelli', team: 'Mercedes', number: 12, color: '#00A19C', image: '/ANT.png' },
  { slug: 'driver/LEC', firstName: 'Charles', lastName: 'Leclerc', team: 'Ferrari', number: 16, color: '#DC0000', image: '/LEC.png' },
  { slug: 'driver/HAM', firstName: 'Lewis', lastName: 'Hamilton', team: 'Ferrari', number: 44, color: '#DC0000', image: '/HAM.png' },
  { slug: 'driver/NOR', firstName: 'Lando', lastName: 'Norris', team: 'McLaren', number: 4, color: '#FF8000', image: '/NOR.png' },
  { slug: 'driver/PIA', firstName: 'Oscar', lastName: 'Piastri', team: 'McLaren', number: 81, color: '#FF8000', image: '/PIA.png' },
  { slug: 'driver/VER', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing', number: 1, color: '#3671C6', image: '/VER.png' },
  { slug: 'driver/LAW', firstName: 'Liam', lastName: 'Lawson', team: 'Red Bull Racing', number: 30, color: '#3671C6', image: '/LAW.png' },
  { slug: 'driver/ALO', firstName: 'Fernando', lastName: 'Alonso', team: 'Aston Martin', number: 14, color: '#358C75', image: '/ALO.png' },
  { slug: 'driver/STR', firstName: 'Lance', lastName: 'Stroll', team: 'Aston Martin', number: 18, color: '#358C75', image: '/STR.png' },
  { slug: 'driver/GAS', firstName: 'Pierre', lastName: 'Gasly', team: 'Alpine', number: 10, color: '#FF87BC', image: '/GAS.png' },
  { slug: 'driver/COL', firstName: 'Jack', lastName: 'Doohan', team: 'Alpine', number: 7, color: '#FF87BC', image: '/COL.png' },
  { slug: 'driver/SAI', firstName: 'Carlos', lastName: 'Sainz', team: 'Williams', number: 55, color: '#37BEDD', image: '/SAI.png' },
  { slug: 'driver/ALB', firstName: 'Alexander', lastName: 'Albon', team: 'Williams', number: 23, color: '#37BEDD', image: '/ALB.png' },
];

export default function DriversPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f0f0', paddingTop: '80px' }}>
      <div style={{ background: '#e10600', padding: '3rem 2rem', textAlign: 'center' }}>
        <Link href="/f1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← F1 에디토리얼
        </Link>
        <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.02em', marginTop: '1rem' }}>
          2026 DRIVERS
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        padding: '12px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {drivers.map((driver) => (
          <Link key={driver.slug} href={`/f1/${driver.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              background: `linear-gradient(135deg, ${driver.color} 0%, ${driver.color}cc 60%, ${driver.color}88 100%)`,
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              minHeight: '200px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}>
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.1,
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              
              <div style={{ zIndex: 1 }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>
                  {driver.firstName}
                </p>
                <p style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 0.25rem 0', lineHeight: 1 }}>
                  {driver.lastName}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500, margin: '0 0 1.25rem 0' }}>
                  {driver.team}
                </p>
                <p style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', opacity: 0.9, margin: 0, lineHeight: 1 }}>
                  {driver.number}
                </p>
              </div>

              <img
                src={driver.image}
                alt={`${driver.firstName} ${driver.lastName}`}
                style={{
                  height: '160px',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  zIndex: 1,
                  filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,0.4))',
                }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
