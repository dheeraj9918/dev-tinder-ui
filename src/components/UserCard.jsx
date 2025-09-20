import React from 'react';

const UserCard = ({ item }) => {
    return (
        <div className="my-4">
            <div className="card bg-base-100 w-96 shadow-sm">
                {/* Image section */}
                {item.photoUrl ? (
                    <figure>
                        <img
                            src={item.photoUrl}
                            alt={`${item.firstName} ${item.lastName}`}
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                ) : (
                    // Placeholder box with fixed size
                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}

                <div className="card-body">
                    <h2 className="card-title">{item.firstName} {item.lastName}</h2>
                    <p>{item.about || "No description available."}</p>
                    {item.skills && item.skills.length > 0 && (
                        <div className="mt-2">
                            <h3 className="font-semibold">Skills:</h3>
                            <ul className="list-disc list-inside">
                                {item.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Two buttons: Ignore & Interested */}
                    <div className="card-actions justify-end mt-4 space-x-2">
                        <button className="btn btn-outline btn-error">Ignore</button>
                        <button className="btn btn-primary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
