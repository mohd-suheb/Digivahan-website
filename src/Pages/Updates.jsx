import React from 'react';
import newimg from "../assets/03vid-blinken-balloon_promo-gzqf-videoLarge 1.png";
import bluimg from "../assets/03china-surveillance-add-fvzg-videoSixteenByNine1050 1.png";

const Updates = () => {
  return (
    <>
      {/* First Section */}
      <div className="w-full flex flex-col items-center mt-8 px-4 md:px-8 lg:px-16">
        {/* Large Image */}
        <img
          src={newimg}
          alt="Large News"
          className="w-full max-h-[400px] object-cover rounded-lg shadow"
        />

        {/* Heading */}
        <div className="text-center mt-6 md:mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Furor Over Chinese Spy Balloon Leads to a
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            Diplomatic Crisis
          </h1>
        </div>

        {/* Article Content */}
        <div className="w-full mt-6 md:mt-8 space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-700 text-left">
          <p>
            The Pentagon called the object, which has flown from Montana to Kansas, an
            “intelligence gathering” balloon. Beijing said it was used mainly for
            weather research and had strayed off course.
          </p>
          <p>
            WASHINGTON — Secretary of State Antony J. Blinken on Friday canceled a weekend
            trip to Beijing after a Chinese spy balloon was sighted above the Rocky Mountain
            state of Montana, igniting a frenzy of media coverage and political commentary
            over a machine that the Pentagon said posed no threat to the United States.
          </p>
          <p>
            Mr. Blinken called the Chinese surveillance an “irresponsible act” and a
            “clear violation of U.S. sovereignty and international law.”
          </p>
          <p>
            China’s “decision to take this action on the eve of my planned visit is detrimental
            to the substantive discussions that we were prepared to have,” he said at a news
            conference on Friday afternoon.
          </p>
          <p>
            Mr. Blinken canceled the trip after civilians in Montana this week began spotting
            the balloon, which the Pentagon said was an “intelligence-gathering” airship.
            Military officials had been monitoring the balloon for days, and Mr. Blinken and a
            deputy secretly confronted Chinese diplomats in Washington on Wednesday. But it
            became a diplomatic crisis only as media attention mounted on Thursday night and
            Republican politicians called for President Biden and Mr. Blinken to act.
          </p>
          <p>
            The balloon’s presence and Mr. Blinken’s announcement added to the rising tensions
            between the two superpowers. The situation also underscored the sensitive politics
            in the United States as both Democratic and Republican leaders vie to be seen as
            sufficiently hawkish on China.
          </p>
          <p>
            Mr. Blinken had planned to leave Friday night for the trip, the first visit by a
            U.S. secretary of state to China since 2018. He had been expected to meet with
            President Xi Jinping and discuss a wide range of issues. But Mr. Blinken said he
            called Wang Yi, China’s top foreign policy official, on Friday and said he was
            postponing his trip because of the balloon.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex flex-col items-center mt-12 md:mt-20 px-4 md:px-8 lg:px-16">
        <img
          src={bluimg}
          alt="Blue Balloon"
          className="w-full md:w-auto max-h-[350px] object-cover rounded-lg shadow"
        />

        <div className="text-sm md:text-base text-gray-400 mt-4 md:mt-5 text-center md:text-left">
          <p> A high-altitude balloon was filmed by a resident in Billings, Montana. The Pentagon has not confirmed that the </p>
          <p> balloon seen in the picture is the one defined as from China.</p>
        </div>

        <div className="w-full mt-6 md:mt-8 space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-700 text-left">
          <p>
            Mr. Blinken said he told Mr. Wang he would visit China “when conditions allow.”
          </p>
          <p>
            Mr. Wang told Mr. Blinken in their phone call that “China is a responsible
            country and has always strictly abided by international law,” the Chinese
            Foreign Ministry said on its website.
          </p>
          <p>
            The brief Chinese summary of their call did not mention the balloon or Mr. Blinken’s
            cancellation of his trip, but suggested China’s leaders believed the Biden
            administration had blown the incident out of proportion. Mr. Wang, the summary said,
            urged that both sides must “avoid misjudgments, and manage and control their disagreements.”
          </p>
          <p>
            Some Republican lawmakers criticized Mr. Biden on Thursday for allowing the balloon
            to drift for days over the United States and not taking harsher measures against China.
            White House officials said such balloons have appeared over U.S. territory before,
            including during the Trump administration.
          </p>
        </div>
      </div>
    </>
  );
};

export default Updates;




