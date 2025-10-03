"use strict";
/**
 * @module TypeScript-Event-Scheduler
 * @author Gabriel Demetrios Lafis
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScheduler = void 0;
/**
 * Classe principal para o agendador de eventos.
 * Permite registrar, despachar e remover ouvintes de eventos.
 * @class EventScheduler
 */
var EventScheduler = /** @class */ (function () {
    function EventScheduler() {
        this.listeners = {};
    }
    /**
     * Registra um ouvinte para um tipo de evento específico.
     * @method on
     * @param {string} eventType - O tipo de evento a ser ouvido.
     * @param {EventListener} listener - A função que será chamada quando o evento ocorrer.
     */
    EventScheduler.prototype.on = function (eventType, listener) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    };
    /**
     * Despacha um evento, notificando todos os ouvintes registrados para esse tipo de evento.
     * @method dispatch
     * @param {Event} event - O evento a ser despachado.
     */
    EventScheduler.prototype.dispatch = function (event) {
        if (this.listeners[event.type]) {
            this.listeners[event.type].forEach(function (listener) { return listener(event); });
        }
    };
    /**
     * Remove um ouvinte de um tipo de evento específico.
     * @method off
     * @param {string} eventType - O tipo de evento do qual o ouvinte será removido.
     * @param {EventListener} listener - A função ouvinte a ser removida.
     */
    EventScheduler.prototype.off = function (eventType, listener) {
        if (this.listeners[eventType]) {
            this.listeners[eventType] = this.listeners[eventType].filter(function (l) { return l !== listener; });
        }
    };
    return EventScheduler;
}());
exports.EventScheduler = EventScheduler;
// Exemplo de uso (não será incluído na documentação gerada, mas demonstra a funcionalidade)
var scheduler = new EventScheduler();
scheduler.on("userLoggedIn", function (event) {
    console.log("User ".concat(event.payload.username, " logged in."));
});
scheduler.dispatch({ type: "userLoggedIn", payload: { username: "gabriel" } });
