/**
 * Event Scheduling and Management System
 * @author Gabriel Demetrios Lafis
 */

import express from 'express';
import { EventScheduler, Event } from './EventScheduler';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Enable JSON body parsing

const eventScheduler = new EventScheduler();

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Event Scheduling and Management System',
        author: 'Gabriel Demetrios Lafis',
        version: '1.0.0'
    });
});

// Endpoint to register an event listener (for demonstration purposes, usually done internally)
app.post('/events/listen', (req, res) => {
    const { eventType } = req.body;
    if (!eventType) {
        return res.status(400).json({ error: 'eventType is required' });
    }
    // In a real application, listeners would be more complex and persistent.
    // For this example, we'll just acknowledge the registration.
    res.status(200).json({ message: `Listener for event type '${eventType}' acknowledged.` });
});

// Endpoint to dispatch an event
app.post('/events/dispatch', (req, res) => {
    const { type, payload } = req.body;
    if (!type || !payload) {
        return res.status(400).json({ error: 'type and payload are required' });
    }
    const event: Event = { type, payload };
    eventScheduler.dispatch(event);
    res.status(200).json({ message: `Event of type '${type}' dispatched successfully.`, event });
});

// Endpoint to get all registered listeners (for debugging/demonstration)
app.get('/events/listeners', (req, res) => {
    // This would expose internal state, usually not for production
    res.status(200).json(eventScheduler['listeners']);
});

app.listen(PORT, () => {
    console.log(`🚀 Event Scheduling and Management System running on port ${PORT}`);
    console.log('👨‍💻 Created by Gabriel Demetrios Lafis');
});

