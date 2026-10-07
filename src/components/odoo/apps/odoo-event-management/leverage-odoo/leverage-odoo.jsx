import React from 'react';
import { Sparkles, Users, Calendar, MapPin, Tag, User, CheckCircle, TrendingUp } from 'lucide-react';

const Leverage = () => {
  const features = [
    {
      icon: Users,
      title: "Speaker Nominations",
      description: "Presenter proposal forms",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Event Scheduling",
      description: "Gantt view organization",
      color: "emerald"
    },
    {
      icon: MapPin,
      title: "Location Filtering",
      description: "Easy venue navigation",
      color: "teal"
    },
    {
      icon: Tag,
      title: "Smart Tagging",
      description: "Quick event categorization",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-100 border-green-200",
      emerald: "text-emerald-600 bg-emerald-100 border-emerald-200",
      teal: "text-teal-600 bg-teal-100 border-teal-200"
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-20 sm:py-24 overflow-hidden">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>

      <div className="relative z-10 container mx-auto text-center px-6 md:px-12 lg:px-24">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200 mb-8">
          <Sparkles className="w-5 h-5 text-green-600" />
          <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
            Interactive Event Features
          </span>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
          Leverage Odoo Events Features to Host{" "}
          <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Interactive Events
          </span>{" "}
          and Manage Speakers
        </h1>

        {/* Decorative Accent Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-8"></div>

        {/* Description Cards */}
        <div className="space-y-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed flex-1">
                Allow visitors to nominate speakers and submit talks by adding a presenter proposal form to your event page. You can simply validate the process of every event or presentation by organizing it and scheduling them in no time while also having a Gantt view option.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed flex-1">
                You can display the agenda for your event automatically with a neat design straight away on your website. Enable visitors to easily search and browse the schedule for published events and rapidly filter by location, tags, date and speakers.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl ${getColorClasses(feature.color)} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Benefits Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-3 rounded-full border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-bold text-green-800">Easy Speaker Management</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-5 py-3 rounded-full border border-emerald-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-800">Automated Scheduling</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-teal-100 to-green-100 px-5 py-3 rounded-full border border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Users className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold text-teal-800">Interactive Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leverage;