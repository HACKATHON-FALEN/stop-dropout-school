import React from "react";
import { Avatar } from "flowbite-react";

const CommentSection = () => {
    return (
        <div>
            {/* Message writing cassette */}
            <form>
                <label htmlFor="chat" className="sr-only">
                    Scrie un comentariu...
                </label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea
                        id="chat"
                        rows="1"
                        className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Scrie un comentariu..."
                    ></textarea>
                    <button
                        type="submit"
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                        <svg
                            className="w-5 h-5 rotate-90 rtl:-rotate-90"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                        >
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span className="sr-only">Trimite mesaj</span>
                    </button>
                </div>
            </form>

            {/* Comments */}
            <div>
                <div className="flex items-start my-4">
                    <Avatar
                        alt="User 1"
                        img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        rounded
                        size="md"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="flex items-center">
                            <span className="font-semibold mr-2">Andrei Popa</span>
                            <span className="text-gray-500 text-sm">3:15 PM</span>
                        </div>
                        <p className="text-gray-700">
                            Minunat proiect! Este o adevărată plăcere să văd atât de multă implicare pentru educația copiilor.
                        </p>
                    </div>
                </div>
                <div className="flex items-start my-4">
                    <Avatar
                        alt="User 2"
                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        rounded
                        size="md"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="flex items-center">
                            <span className="font-semibold mr-2">Maria Ionescu</span>
                            <span className="text-gray-500 text-sm">1:40 PM</span>
                        </div>
                        <p className="text-gray-700">
                            Felicitări pentru inițiativă! Copiii au nevoie de susținerea noastră pentru a-și atinge potențialul.
                        </p>
                    </div>
                </div>
                <div className="flex items-start my-4">
                    <Avatar
                        alt="User 3"
                        img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        rounded
                        size="md"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="flex items-center">
                            <span className="font-semibold mr-2">Radu Dumitrescu</span>
                            <span className="text-gray-500 text-sm">5:25 PM</span>
                        </div>
                        <p className="text-gray-700">
                            Este grozav să văd că cineva pune suflet în educația generațiilor viitoare. Bravo!
                        </p>
                    </div>
                </div>
                <div className="flex items-start my-4">
                    <Avatar
                        alt="User 4"
                        img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        rounded
                        size="md"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="flex items-center">
                            <span className="font-semibold mr-2">Ana Marin</span>
                            <span className="text-gray-500 text-sm">6:50 PM</span>
                        </div>
                        <p className="text-gray-700">
                            O inițiativă de admirat. Cu siguranță voi sprijini acest proiect și pe viitor!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
