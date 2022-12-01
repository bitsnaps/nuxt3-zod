import { z } from 'zod'

export default z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
    userId: z.number()
})
