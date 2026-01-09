/**
 * API функции для работы с бэкендом
 */

interface SubscribeResponse {
  success: boolean;
  message?: string;
}

/**
 * Отправка email для подписки на рассылку
 */
export async function subscribeEmail(email: string): Promise<SubscribeResponse> {
  try {
    // MOCK VERSION - для тестирования без реального API
    // Раскомментируйте код ниже, когда настроите бэкенд
    
    /*
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Ошибка при подписке');
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message,
    };
    */
    
    // MOCK: Имитируем успешную отправку
    console.log('📧 Mock API: Подписка email ->', email);
    
    // Симулируем небольшую задержку как у реального API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      success: true,
      message: 'Email успешно добавлен в список рассылки',
    };
    
  } catch (error) {
    console.error('Ошибка API subscribeEmail:', error);
    throw error;
  }
}

/**
 * Отписка от рассылки
 */
export async function unsubscribeEmail(email: string, token?: string): Promise<SubscribeResponse> {
  try {
    // MOCK VERSION - для тестирования без реального API
    // Раскомментируйте код ниже, когда настроите бэкенд
    
    /*
    const response = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, token }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Ошибка при отписке');
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message,
    };
    */
    
    // MOCK: Имитируем успешную отписку
    console.log('📧 Mock API: Отписка email ->', email, token ? `(token: ${token})` : '');
    
    // Симулируем небольшую задержку как у реального API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      success: true,
      message: 'Вы успешно отписаны от рассылки',
    };
    
  } catch (error) {
    console.error('Ошибка API unsubscribeEmail:', error);
    throw error;
  }
}