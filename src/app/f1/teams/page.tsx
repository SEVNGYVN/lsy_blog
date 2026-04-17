"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';

const teams = [
  { slug: 'F',  name: 'Ferrari',           color: '#DC0000', image: '/F_CAR.png' },
  { slug: 'M',  name: 'Mercedes',          color: '#00A19C', image: '/M_CAR.png' },
  { slug: 'ML', name: 'McLaren',           color: '#FF8000', image: '/ML_CAR.png' },
  { slug: 'R',  name: 'Red Bull Racing',   color: '#152E52', image: '/R_CAR.png' },
  { slug: 'A',  name: 'Alpine',            color: '#005073', image: '/A_CAR.png' },
  { slug: 'W',  name: 'Williams',          color: '#061D3D', image: '/W_CAR.png' },
  { slug: 'H',  name: 'Haas F1 Team',      color: '#5E6D75', image: '/H_CAR.png' },
  { slug: 'RB', name: 'Racing Bulls',      color: '#003BD1', image: '/RB_CAR.png' },
  { slug: 'AD', name: 'Audi',              color: '#7D1600', image: '/AD_CAR.png' },
  { slug: 'AM', name: 'Aston Martin',      color: '#358C75', image: '/AM_CAR.png' },
  { slug: 'C',  name: 'Cadillac',          color: '#4B4C53', image: '/C_CAR.png' },
];

export default function TeamsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f0f0', paddingTop: '80px' }}>
      <Navbar />
      <div style={{ background: '#12121A', padding: '3rem 2rem', textAlign: 'center' }}>
        {/*<Link href="/f1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← F1 에디토리얼
        </Link>*/}
        <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.02em', marginTop: '1rem' }}>
          2026 F1 TEAMS
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
        {teams.map((team) => (
          <Link key={team.slug} href={`/f1/team/${team.slug}`} style={{ textDecoration: 'none' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                background: team.color,
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
                src={team.image}
                alt={team.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
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
