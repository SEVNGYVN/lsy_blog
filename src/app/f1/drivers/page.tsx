"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';

const drivers = [
  { slug: 'LEC', firstName: 'Charles', lastName: 'Leclerc', team: 'Ferrari', number: 16, color: '#DC0000', image: '/F_LEC.png' },
  { slug: 'driver/HAM', firstName: 'Lewis', lastName: 'Hamilton', team: 'Ferrari', number: 44, color: '#DC0000', image: '/F_HAM.png' },
  { slug: 'driver/RUS', firstName: 'George', lastName: 'Russell', team: 'Mercedes', number: 63, color: '#00A19C', image: '/M_RUS.png' },
  { slug: 'driver/ANT', firstName: 'Kimi', lastName: 'Antonelli', team: 'Mercedes', number: 12, color: '#00A19C', image: '/M_ANT.png' },
  { slug: 'driver/NOR', firstName: 'Lando', lastName: 'Norris', team: 'McLaren', number: 1, color: '#FF8000', image: '/ML_NOR.png' },
  { slug: 'driver/PIA', firstName: 'Oscar', lastName: 'Piastri', team: 'McLaren', number: 81, color: '#FF8000', image: '/ML_PIA.png' },
  { slug: 'driver/VER', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing', number: 3, color: '#152E52', image: '/R_VER.png' },
  { slug: 'driver/HAD', firstName: 'Isack', lastName: 'Hadjar', team: 'Red Bull Racing', number: 6, color: '#152E52', image: '/R_HAD.png' },
  { slug: 'driver/GAS', firstName: 'Pierre', lastName: 'Gasly', team: 'Alpine', number: 10, color: '#005073', image: '/A_GAS.png' },
  { slug: 'driver/COL', firstName: 'Franco', lastName: 'Colapinto', team: 'Alpine', number: 43, color: '#005073', image: '/A_COL.png' },
  { slug: 'driver/SAI', firstName: 'Carlos', lastName: 'Sainz', team: 'Williams', number: 55, color: '#061D3D', image: '/W_SAI.png' },
  { slug: 'driver/ALB', firstName: 'Alexander', lastName: 'Albon', team: 'Williams', number: 23, color: '#061D3D', image: '/W_ALB.png' },
  { slug: 'driver/OCO', firstName: 'Esteban', lastName: 'Ocon', team: 'Haas F1 Team', number: 31, color: '#5E6D75', image: '/H_OCO.png' },
  { slug: 'driver/BEA', firstName: 'Oliver', lastName: 'Bearman', team: 'Haas F1 Team', number: 87, color: '#5E6D75', image: '/H_BEA.png' },
  { slug: 'driver/LAW', firstName: 'Liam', lastName: 'Lawson', team: 'Racing Bulls', number: 30, color: '#003BD1', image: '/RB_LAW.png' },
  { slug: 'driver/LIN', firstName: 'Arvid', lastName: 'Lindblad', team: 'Racing Bulls', number: 41, color: '#003BD1', image: '/RB_LIN.png' },
  { slug: 'driver/HUL', firstName: 'Nico', lastName: 'Hülkenberg', team: 'Audi', number: 27, color: '#7D1600', image: '/AD_HUL.png' },
  { slug: 'driver/BOR', firstName: 'Gabriel', lastName: 'Bortoleto', team: 'Audi', number: 5, color: '#7D1600', image: '/AD_BOR.png' },
  { slug: 'driver/ALO', firstName: 'Fernando', lastName: 'Alonso', team: 'Aston Martin', number: 14, color: '#358C75', image: '/AM_ALO.png' },
  { slug: 'driver/STR', firstName: 'Lance', lastName: 'Stroll', team: 'Aston Martin', number: 18, color: '#358C75', image: '/AM_STR.png' },
  { slug: 'driver/PER', firstName: 'Sergio', lastName: 'Pérez', team: 'Cadillac', number: 11, color: '#4B4C53', image: '/C_PER.png' },
  { slug: 'driver/BOT', firstName: 'Valtteri', lastName: 'Bottas', team: 'Cadillac', number: 77, color: '#4B4C53', image: '/C_BOT.png' },
];

export default function DriversPage() {
  return (
    
    <div style={{ minHeight: '100vh', background: '#0e0e16', paddingTop: '64px' }}>
      <Navbar />
      <div style={{ background: '#12121A', padding: '3rem 2rem 1rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ borderTop: '4px solid #e10600', marginBottom: '2rem' }} />
        {/*<Link href="/f1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← F1 에디토리얼
        </Link>*/}
        <h1 style={{
    color: 'white', fontSize: '3rem', fontWeight: 900,
    letterSpacing: '-0.03em', margin: '0 0 2rem 0', fontFamily: "'Inter', sans-serif",}}>
          2026 F1 DRIVERS
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
        {drivers.map((driver, index) => (
          <Link key={index} href={`/f1/drivers/${driver.slug}`} style={{ textDecoration: 'none' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '33 / 14',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                background: driver.color,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.22)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
              }}
            >
              <img
                src={driver.image}
                alt={`${driver.firstName} ${driver.lastName}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
