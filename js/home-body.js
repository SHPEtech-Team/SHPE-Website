document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'listWeek',
    googleCalendarApiKey: 'AIzaSyDAQIw5JtCyjWZH-8kQL_ti3XBVp_UWcOA',

    height: 300,
    dayMaxEvents: true,

    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next',
    },

    titleFormat: {
      month: 'short',
      day: 'numeric',
    },

    eventClick: function(info) {
      info.jsEvent.cancelBubble = true;
      info.jsEvent.preventDefault();

      var eventObj = info.event;

      var startDate = calendar.formatDate(eventObj.start, {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        weekday: 'long',
      });

      var endDate = calendar.formatDate(eventObj.end, {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        weekday: 'long',
      });

      var startTime = calendar.formatDate(eventObj.start, {
        hour: 'numeric',
        minute: 'numeric',
      });

      var endTime = calendar.formatDate(eventObj.end, {
        hour: 'numeric',
        minute: 'numeric',
      });

      if (eventObj.allDay) {
        $('.modal-title').html(eventObj.title);
        $('.event-date').html('Date: ' + startDate + ' to ' + endDate);
        $('.event-location').html('Location: ' + eventObj.extendedProps.location);
        $('.event-description').html('Description: ' + eventObj.extendedProps.description);
        $('#fullCalModal').modal();
      }
      else {
        $('.modal-title').html(eventObj.title);
        $('.event-date').html('Date: ' + startDate);
        $('.event-time').html('Time: ' + startTime + ' to ' + endTime);
        $('.event-location').html('Location: ' + eventObj.extendedProps.location);
        $('.event-description').html('Description: ' + eventObj.extendedProps.description);
        $('#fullCalModal').modal();
      }
      
    },

    eventSources: [
      {
        googleCalendarId: 'c_97d377411e90c628d36acebad9ad6bca3a2e193eda7763ce2b6d645fab6b36a0@group.calendar.google.com',
        color: '#D33A02',
        display: 'block',
        timeZone: 'local',
      },
      {
        googleCalendarId: 'c_f5ae8c5397dae724849dd9750de837039a484254b8049c8017f050ef7f7b1d35@group.calendar.google.com',
        color: '#FD652F',
        display: 'block',
      },
      {
        googleCalendarId: 'c_4591706d663e704a7508531ac1816e3f0942fedf0b974fcbf994a6340b98a302@group.calendar.google.com',
        color: '#001F5B',
        display: 'block',
      },
      {
        googleCalendarId: 'c_fd1677fdb56b23bde472afa7b39024c199e28cbdcdeaf6ceb2d1175df3ea5e9a@group.calendar.google.com',
        color: '#0070C0',
        display: 'block',
      },
      {
        googleCalendarId: 'c_69031c45e26400c72687c809b29ac52fe798ef1caab13731b78278f4f2d1341c@group.calendar.google.com',
        color: '#72A9BE',
        display: 'block',
      },
      {
        googleCalendarId: 'c_908cfbe1b9cc85d0dabcd20beeb5035b579750e69062797c2dd12075ff474ad0@group.calendar.google.com',
        color: '#8B0000',
        display: 'block',
      }
    ],
  });
  calendar.render();
});