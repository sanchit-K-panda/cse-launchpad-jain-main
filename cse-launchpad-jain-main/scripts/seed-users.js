
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env vars')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const users = [
    { name: 'Khush', email: 'khush@example.com', password: 'password123', role: 'student' },
    { name: 'Jitesh', email: 'jitesh@example.com', password: 'password123', role: 'student' },
    { name: 'Kamlesh Tiwari', email: 'kamlesh@example.com', password: 'password123', role: 'mentor' }
]

async function seed() {
    console.log('🌱 Seeding users...')

    for (const user of users) {
        console.log(`Checking ${user.name}...`)

        // 1. Try to sign in
        const { data: signinData, error: signinError } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })

        if (!signinError && signinData.user) {
            console.log(`✅ ${user.name} already exists.`)
            continue;
        }

        // 2. If not found, create (wait first)
        console.log(`Creating ${user.name}...`)
        await new Promise(resolve => setTimeout(resolve, 5000));

        const { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                data: {
                    full_name: user.name,
                    role: user.role
                }
            }
        })

        if (error) {
            console.error(`❌ Failed to create ${user.name}:`, error.message)
        } else {
            console.log(`✅ Created ${user.name} (${user.email})`)
        }
    }
}

seed()
