const Message = msg => type => args => ({ msg, type, ...args })

export const ChangeRequest = Message('change-request')
export const Event = Message('event')
export const Intent = Message('intent')
