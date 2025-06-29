import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const CallScheduler = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  // Close pickers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowTimePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScheduleCall = () => {
    setShowOptions(true);
  };

  const handleDirectCall = () => {
    // Replace this with your actual phone number
    // You can also use environment variable: process.env.NEXT_PUBLIC_MY_NUMBER
    const phoneNumber = process.env.NEXT_PUBLIC_MY_NUMBER; // Change this to your phone number
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleScheduleCallback = () => {
    setSelectedOption('callback');
  };

  const handleSubmitCallback = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && userName.trim()) {
      // Format the date for better readability
      const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Create WhatsApp message
      const message = `Hi! I would like to schedule a call back.\n\nName: ${userName}\nDate: ${formattedDate}\nTime: ${selectedTime}\n\nPlease confirm if this time works for you.`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Get phone number from environment variable
      const phoneNumber = process.env.NEXT_PUBLIC_MY_NUMBER || '+1234567890';
      
      // Remove any non-digit characters from phone number for WhatsApp
      const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowOptions(false);
        setSelectedOption(null);
        setSelectedDate('');
        setSelectedTime('');
        setUserName('');
      }, 3000);
    }
  };

  const handleBack = () => {
    if (selectedOption) {
      setSelectedOption(null);
    } else {
      setShowOptions(false);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getMinTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isToday = (date) => {
    return formatDate(date) === getCurrentDate();
  };

  const isSelected = (date) => {
    return formatDate(date) === selectedDate;
  };

  const isPastDate = (date) => {
    return date < new Date(getCurrentDate());
  };

  const handleDateSelect = (day) => {
    const selectedDateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(formatDate(selectedDateObj));
    setShowDatePicker(false);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Time picker functions
  const timeSlots = [];
  for (let hour = 9; hour <= 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      timeSlots.push(timeString);
    }
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowTimePicker(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isCurrentDay = isToday(date);
      const isSelectedDay = isSelected(date);
      const isPast = isPastDate(date);

      days.push(
        <button
          key={day}
          onClick={() => !isPast && handleDateSelect(day)}
          disabled={isPast}
          className={`h-10 w-10 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center ${
            isSelectedDay
              ? 'bg-blue-500 text-white'
              : isCurrentDay
              ? 'bg-blue-100 text-blue-600 border-2 border-blue-300'
              : isPast
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-300 mb-4">
            Your call request has been sent to WhatsApp.
          </p>
          <p className="text-sm text-gray-400">
            You will receive a confirmation shortly.
          </p>
        </div>
      </div>
    );
  }

  if (showOptions) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 max-w-md w-full relative">
          {!selectedOption ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Choose Call Option</h3>
                <p className="text-gray-300">How would you like to connect?</p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={handleDirectCall}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Direct Call Now</span>
                </button>
                
                <button
                  onClick={handleScheduleCallback}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Callback</span>
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmitCallback} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Schedule Callback</h3>
                <p className="text-gray-300">Choose your preferred date and time</p>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="relative" ref={datePickerRef}>
                <label htmlFor="date" className="block text-sm font-medium mb-2 text-gray-300">
                  Date *
                </label>
                <div
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span className={selectedDate ? 'text-white' : 'text-gray-400'}>
                    {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    }) : 'Select a date'}
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {showDatePicker && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={prevMonth}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h3>
                      <button
                        onClick={nextMonth}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                      {renderCalendar()}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative" ref={timePickerRef}>
                <label htmlFor="time" className="block text-sm font-medium mb-2 text-gray-300">
                  Time *
                </label>
                <div
                  onClick={() => setShowTimePicker(!showTimePicker)}
                  className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span className={selectedTime ? 'text-white' : 'text-gray-400'}>
                    {selectedTime || 'Select a time'}
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {showTimePicker && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-4 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-2 text-sm rounded-lg transition-colors ${
                            selectedTime === time
                              ? 'bg-blue-500 text-white'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2.5 px-4 rounded-lg font-semibold transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          )}
          
          <button
            onClick={handleBack}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <ScrollAnimation direction="up" delay={0.5}>
      <div className="text-center mt-8 sm:mt-12 md:mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mx-4 sm:mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base px-1 sm:px-2 leading-relaxed">
            Let's discuss how I can help bring your ideas to life with cutting-edge web development solutions.
          </p>
          <button 
            onClick={handleScheduleCall}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base mx-auto min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default CallScheduler; 