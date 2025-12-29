const adjectives = [
  'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
  'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
  'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
  'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green',
  'long', 'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old',
  'red', 'rough', 'still', 'small', 'sparkling', 'throbbing', 'shy',
  'wandering', 'withered', 'wild', 'black', 'young', 'holy', 'solitary',
  'fragrant', 'aged', 'snowy', 'proud', 'floral', 'restless', 'divine',
  'polished', 'ancient', 'purple', 'lively', 'nameless',
]

const nouns = [
  'water', 'haze', 'fog', 'smoke', 'dust', 'feather', 'cloud',
  'leaf', 'star', 'tree', 'bird', 'sun', 'moon', 'silence',
  'nature', 'flower', 'wind', 'stream', 'river', 'fire', 'sky', 'sea',
  'field', 'breeze', 'night', 'snow', 'rainbow', 'mountain', 'sunset',
  'dawn', 'rain', 'sand', 'glade', 'cherry', 'violet', 'flame',
  'shadow', 'pine', 'grass', 'glitter', 'frost', 'hill', 'wave', 'wildflower',
  'lake', 'pond', 'darkness', 'sound', 'voice', 'shape', 'surf', 'thunder',
  'meadow', 'waterfall', 'pine', 'wood', 'dream', 'morning', 'dice',
]

export function generateName () {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]

  return `${adjective}-${noun}`
}
