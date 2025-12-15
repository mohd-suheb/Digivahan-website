import React, { useState } from 'react';
import { ArrowLeft, User, Phone, Mail, Send, Search, CheckCircle } from 'lucide-react';

const IssuesPriorityDashboard = () => {
  const [view, setView] = useState('dashboard'); // dashboard, issueList, resolution, ticketDetail
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [ticketSearchId, setTicketSearchId] = useState('');
  const [searchedTicket, setSearchedTicket] = useState(null);

  // Issue categories data
  const issueCategories = [
    { 
      id: 1, 
      name: 'Priority Issue', 
      count: 8, 
      color: 'red',
      description: 'Critical issues requiring immediate attention',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-300',
      dotColor: 'bg-red-500'
    },
    { 
      id: 2, 
      name: 'App Issue', 
      count: 15, 
      color: 'blue',
      description: 'Application bugs and technical problems',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      dotColor: 'bg-blue-500'
    },
    { 
      id: 3, 
      name: 'Service Issue', 
      count: 12, 
      color: 'yellow',
      description: 'Service quality and delivery issues',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-300',
      dotColor: 'bg-yellow-500'
    },
    { 
      id: 4, 
      name: 'Support Issue', 
      count: 9, 
      color: 'orange',
      description: 'Customer support related problems',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-300',
      dotColor: 'bg-orange-500'
    },
    { 
      id: 5, 
      name: 'Suggestion', 
      count: 22, 
      color: 'green',
      description: 'Feature requests and improvements',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300',
      dotColor: 'bg-green-500'
    }
  ];

  // Sample issues data
  const issuesData = [
    { userId: 'USR-1021', userName: 'Rohan Mehta', summary: 'App crash while scanning QR', date: '22 Dec, 4:30 PM', phone: '+91 98765 43210', email: 'rohan.mehta@email.com', membership: 'Active' },
    { userId: 'USR-2134', userName: 'Priya Sharma', summary: 'Payment not processing', date: '22 Dec, 3:15 PM', phone: '+91 98765 43211', email: 'priya.sharma@email.com', membership: 'Active' },
    { userId: 'USR-3245', userName: 'Amit Kumar', summary: 'Profile picture not uploading', date: '22 Dec, 2:00 PM', phone: '+91 98765 43212', email: 'amit.kumar@email.com', membership: 'Active' }
  ];

  // Resolved tickets data
  const resolvedTickets = [
    { ticketId: 'TKT-12345', userName: 'Vikram Singh', issue: 'Login issue fixed', category: 'App Issue', status: 'Resolved', dateResolved: '21 Dec, 2025', resolvedBy: 'Admin User', resolution: 'Issue fixed by updating to latest version.' },
    { ticketId: 'TKT-12346', userName: 'Neha Patel', issue: 'QR code not generating', category: 'Service Issue', status: 'Resolved', dateResolved: '20 Dec, 2025', resolvedBy: 'Admin User', resolution: 'QR generation service restarted.' }
  ];

  // Chat messages (sample)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'App crash ho raha hai jab QR scan karta hoon', sender: 'user', time: '10:30 AM' },
    { id: 2, text: 'Can you tell me which device you are using?', sender: 'admin', time: '10:35 AM' },
    { id: 3, text: 'iPhone 12, iOS 17', sender: 'user', time: '10:36 AM' },
    { id: 4, text: 'Thank you. We are looking into this issue.', sender: 'admin', time: '10:40 AM' }
  ]);

  const handleCardClick = (category) => {
    setSelectedIssue(category);
    setView('issueList');
  };

  const handleResolveClick = (issue) => {
    setSelectedTicket(issue);
    setView('resolution');
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: 'admin',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setChatMessage('');
    }
  };

  const handleMarkResolved = () => {
    alert('Ticket marked as resolved!');
    setView('dashboard');
  };

  const handleTicketSearch = () => {
    const ticket = resolvedTickets.find(t => t.ticketId === ticketSearchId);
    if (ticket) {
      setSearchedTicket(ticket);
      setView('ticketDetail');
    } else {
      alert('Ticket not found!');
    }
  };

  // Dashboard View
  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Issues / Priority</h1>
          <p className="text-gray-600 mt-1">Manage and resolve customer issues</p>
        </div>

        {/* Issue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {issueCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCardClick(category)}
              className={`${category.bgColor} rounded-lg p-6 border-l-4 ${category.borderColor} cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-full ${category.dotColor}`}></div>
                <div className="text-4xl font-bold text-gray-900">{category.count}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Resolved Tickets */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Resolved Tickets</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Ticket ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">User Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Issue</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date Resolved</th>
                  </tr>
                </thead>
                <tbody>
                  {resolvedTickets.map((ticket) => (
                    <tr key={ticket.ticketId} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <span className="text-blue-600 font-medium">{ticket.ticketId}</span>
                      </td>
                      <td className="py-4 px-4">{ticket.userName}</td>
                      <td className="py-4 px-4">{ticket.issue}</td>
                      <td className="py-4 px-4">{ticket.category}</td>
                      <td className="py-4 px-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">{ticket.dateResolved}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Ticket Search */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Ticket Search</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={ticketSearchId}
              onChange={(e) => setTicketSearchId(e.target.value)}
              placeholder="Enter Ticket ID (e.g., TKT-12345)"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleTicketSearch}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              <Search size={18} />
              Check Ticket
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Issue List View
  if (view === 'issueList') {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button
          onClick={() => setView('dashboard')}
          className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{selectedIssue?.name}</h1>
          <p className="text-gray-600 mt-1">Total issues: {selectedIssue?.count}</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">User ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">User Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Issue Summary</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {issuesData.map((issue) => (
                  <tr key={issue.userId} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-blue-600 font-medium">{issue.userId}</span>
                    </td>
                    <td className="py-4 px-4">{issue.userName}</td>
                    <td className="py-4 px-4">{issue.summary}</td>
                    <td className="py-4 px-4">{issue.date}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleResolveClick(issue)}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        <CheckCircle size={16} />
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Issue Resolution View
  if (view === 'resolution') {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button
          onClick={() => setView('issueList')}
          className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Issue Resolution</h1>
          <p className="text-gray-600 mt-1">{selectedTicket?.summary}</p>
        </div>

        {/* User Profile */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">User Profile</h2>
          <div className="flex gap-6">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <User size={40} className="text-white" />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">User Name</p>
                <p className="font-semibold">{selectedTicket?.userName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">User ID</p>
                <p className="font-semibold">{selectedTicket?.userId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span>{selectedTicket?.phone}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <span>{selectedTicket?.email}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Membership Status</p>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                  {selectedTicket?.membership}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Live Chat - Issue Resolution</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 ${msg.sender === 'admin' ? 'flex justify-end' : ''}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.sender === 'admin'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'admin' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your response..."
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                <Send size={18} />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Mark as Resolved Button */}
        <div className="flex justify-end">
          <button
            onClick={handleMarkResolved}
            className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg font-semibold"
          >
            <CheckCircle size={20} />
            Mark as Resolved
          </button>
        </div>
      </div>
    );
  }

  // Ticket Detail View
  if (view === 'ticketDetail' && searchedTicket) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button
          onClick={() => {
            setView('dashboard');
            setSearchedTicket(null);
            setTicketSearchId('');
          }}
          className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Ticket Search</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={ticketSearchId}
              onChange={(e) => setTicketSearchId(e.target.value)}
              placeholder="TKT-12345"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleTicketSearch}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              <Search size={18} />
              Check Ticket
            </button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Ticket Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Ticket ID</p>
              <p className="font-semibold text-lg">{searchedTicket.ticketId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">User Name</p>
              <p className="font-semibold text-lg">{searchedTicket.userName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Issue</p>
              <p className="font-semibold">{searchedTicket.issue}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Category</p>
              <p className="font-semibold">{searchedTicket.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                {searchedTicket.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Date Resolved</p>
              <p className="font-semibold">{searchedTicket.dateResolved}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Resolved By</p>
              <p className="font-semibold">{searchedTicket.resolvedBy}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Resolution Summary</p>
              <p className="font-semibold">{searchedTicket.resolution}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default IssuesPriorityDashboard;