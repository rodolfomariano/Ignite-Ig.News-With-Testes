import { fireEvent, render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { SubscribeButton } from '.'

jest.mock('next-auth/client')

jest.mock('next/router')

describe('SubscribeButton component', () => {
  
  test('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render( <SubscribeButton /> )
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  test('redirect user to social sign in page, when not authenticated', () => {
    const signInMocked = mocked(signIn)
    
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    
    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  test('redirects to posts page when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      { 
        user: {
          name: 'John Doe', 
          email: 'john.doe@example.com'
        }, 
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-express' 
      },
      false
    ] as any)

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })

})
