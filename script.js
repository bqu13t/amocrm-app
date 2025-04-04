document.addEventListener('DOMContentLoaded', () => {
  // Инициализация виджета
  AMOCRM.init(async () => {
    try {
      // 1. Получение данных текущего пользователя
      const user = await AMOCRM.constant('user');
      document.getElementById('userInfo').innerHTML = `
        <p>Пользователь: <strong>${user.name}</strong></p>
        <p>Аккаунт: <strong>${user.account.name}</strong></p>
      `;

      // 2. Загрузка списка сделок
      const response = await AMOCRM.data.get('/api/v4/leads', {
        page: 1,
        limit: 10,
        with: 'contacts',
      });

      const leads = response._embedded.leads;
      renderLeads(leads);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  });
});

// Отображение сделок в интерфейсе
function renderLeads(leads) {
  const leadsContainer = document.getElementById('leads');
  leadsContainer.innerHTML = leads
    .map(
      (lead) => `
    <div class="lead-item">
      <h3>${lead.name}</h3>
      <p>Статус: ${lead.status_id}</p>
      <p>Сумма: ${lead.price} ₽</p>
    </div>
  `
    )
    .join('');
}
