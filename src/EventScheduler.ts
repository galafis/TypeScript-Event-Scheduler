/**
 * @module TypeScript-Event-Scheduler
 * @author Gabriel Demetrios Lafis
 * @license MIT
 */

/**
 * Interface para um evento genérico.
 * @interface Event
 * @property {string} type - O tipo do evento.
 * @property {any} payload - Os dados associados ao evento.
 */
export interface Event {
    type: string;
    payload: any;
}

/**
 * Tipo para um ouvinte de evento.
 * @typedef {(event: Event) => void} EventListener
 */
export type EventListener = (event: Event) => void;

/**
 * Classe principal para o agendador de eventos.
 * Permite registrar, despachar e remover ouvintes de eventos.
 * @class EventScheduler
 */
export class EventScheduler {
    private listeners: { [eventType: string]: EventListener[] } = {};

    /**
     * Registra um ouvinte para um tipo de evento específico.
     * @method on
     * @param {string} eventType - O tipo de evento a ser ouvido.
     * @param {EventListener} listener - A função que será chamada quando o evento ocorrer.
     */
    public on(eventType: string, listener: EventListener): void {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    /**
     * Despacha um evento, notificando todos os ouvintes registrados para esse tipo de evento.
     * @method dispatch
     * @param {Event} event - O evento a ser despachado.
     */
    public dispatch(event: Event): void {
        if (this.listeners[event.type]) {
            this.listeners[event.type].forEach(listener => listener(event));
        }
    }

    /**
     * Remove um ouvinte de um tipo de evento específico.
     * @method off
     * @param {string} eventType - O tipo de evento do qual o ouvinte será removido.
     * @param {EventListener} listener - A função ouvinte a ser removida.
     */
    public off(eventType: string, listener: EventListener): void {
        if (this.listeners[eventType]) {
            this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
        }
    }
}

// Exemplo de uso (não será incluído na documentação gerada, mas demonstra a funcionalidade)
const scheduler = new EventScheduler();

scheduler.on("userLoggedIn", (event) => {
    console.log(`User ${event.payload.username} logged in.`);
});

scheduler.dispatch({ type: "userLoggedIn", payload: { username: "gabriel" } });

