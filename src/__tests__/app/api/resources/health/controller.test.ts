import { server } from '~/__tests__/config/helpers'

describe('Health Controller', () => {
  it('Response status', async () => {
    const res = await server.get('/health')
    const { status, body } = res

    expect(status).toBe(200)

    expect(body).toEqual({
      upTime: expect.any(Number),
      upTimeTranslate: expect.any(String),
      message: expect.any(String),
      timestamp: expect.any(Number),
    })
  })
})
