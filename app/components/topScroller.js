export default function Marquee() {
  const items = [
    "📍 Current Location: Bangkok, Thailand 🇹🇭",
    "👷🏼 Working on: Automated Social Media Content Tooling, Ad Account Management",
    "📅 Availability: 🟢 Contract based development work",
    "🎶 Listening to: Tuscany - John Carroll Kirby",
    "📚 Reading: The Beach - Alex Garland, The Fourth Turning - Neil Howe and William Strauss",
    "🧑‍🏫 Learning: How to use AI for learning languages, Spanish, Muay Thai",
    "😄 Enjoying: Swimming in the sea, Pad kra pao",
  ];

  // Duplicate inline in a flat array
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="overflow-hidden w-full bg-cBg2 py-1 text-cWhite border-b border-cLine text-smallBody whitespace-nowrap">
      <div
        className="inline-flex animate-[marquee_var(--marquee-duration)_linear_infinite]"
        style={{ "--marquee-duration": "130s" }}
      >
        {repeatedItems.map((item, i) => (
          <span key={i} className="mx-16 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
