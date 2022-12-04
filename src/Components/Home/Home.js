import React, { useEffect, useState } from "react";

const Home = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // copying into an array for traversing
        const arrData = [];
        for (const prop in data) {
          arrData.push(data[prop]);
        }
        setAttendanceData(arrData);
      });
  }, []);
  console.log(attendanceData);

  if (!attendanceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-inter">
      <div className="px-10 py-4 bg-[#1678CB] text-white w-max mx-auto rounded-md">
        <h2 className="text-3xl">Attendance Information</h2>
      </div>

      <div className="bg-white p-8 rounded-md w-full">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="w-[33%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                      Employee Name
                    </th>
                    <th className="w-[33%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="w-[33%] px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((singleData, idx) => (
                    <tr key={idx}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {singleData?.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {Object.keys(singleData?.attendance)[idx]}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {Object.values(singleData?.attendance)[idx].status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
