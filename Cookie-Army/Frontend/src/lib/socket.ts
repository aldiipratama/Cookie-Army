import Pusher from 'pusher-js';

const options = {
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
}

export const pusher = new Pusher(options.key, {
  cluster: options.cluster,
})