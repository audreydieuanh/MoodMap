import { pool } from './database.js';
import './dotenv.js';
import resourcesData from '../data/resources.js';

const createResourcesTable = async () => {
    const dropTableQuery = `
        DROP TABLE IF EXISTS resources;
    `;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS resources (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            type VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            link VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            target_audience VARCHAR(255) NOT NULL,
            location VARCHAR(100) NOT NULL
        );
    `;


    try {
        // First, drop the table if it exists
        await pool.query(dropTableQuery);
        console.log("Dropped table if it existed.");

        const res = await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('⚠️ error creating resource table', error)
    }
}

const seedResourcesTable = async () => {
    await createResourcesTable();

    resourcesData.forEach((resource) => {
        const insertQuery = {
            text: 'INSERT INTO resources (title, type, description, link, image, target_audience, location) VALUES ($1, $2, $3, $4, $5, $6, $7);'
        }

        const values = [
            resource.title,
            resource.type,
            resource.description,
            resource.link,
            resource.image,
            resource.target_audience,
            resource.location
        ]

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ error inserting resource', error)
                return;
            }

            console.log(`✅ ${resource.title} added successfully`)
        })
    })
}

seedResourcesTable();