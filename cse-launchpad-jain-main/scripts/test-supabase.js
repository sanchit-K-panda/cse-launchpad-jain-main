
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load .env file
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

console.log('Testing connection to:', supabaseUrl)
console.log('Using key starting with:', supabaseKey ? supabaseKey.substring(0, 10) + '...' : 'undefined')

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    try {
        const { data, error } = await supabase.from('profiles').select('count', { count: 'exact', head: true })

        if (error) {
            console.error('Connection failed:', error.message)
            console.error('Error details:', error)
        } else {
            console.log('Connection successful!')
            console.log('Supabase is reachable.')
        }
    } catch (err) {
        console.error('Unexpected error:', err)
    }
}

testConnection()
