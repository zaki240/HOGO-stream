"use client";
import pb from "@/app/_lib/pocketbase";
import { NextApiRequest, NextApiResponse } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function AddMovie() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [fileImage, setFileImage] = useState(undefined);
  const [cooldown, setCooldown] = useState(false);

  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  async function onSubmit(data) {
    if (cooldown) {
      console.log("wait for cooldown bitch");
      return;
    }
    if (fileImage) {
      data.img = fileImage;
      setCooldown(true);
      try {
        // await sleep(10000);
        const record = await pb.collection("movie").create(data);
        console.log(record);
        setCooldown(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("add image bitch");
      return;
    }
  }
  //   const onSubmit = (data) => console.log(data, fileImage);
  //   console.log(watch("example"));

  return (
    <main className="min-h-screen  flex flex-col items-center p-2 pt-4 text-black i">
      <form class="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-md font-medium text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            class="mb-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="John Wick 4 (2023)"
            {...register("title")}
            required
          />
        </div>
        <div>
          <label for="url" class="block mb-2 text-md font-medium text-white">
            Url
          </label>
          <input
            type="text"
            id="url"
            class="mb-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            {...register("url")}
            placeholder="www.youtube.com/watch?v=dQw4w9WgXcQ"
            required
          />
        </div>
        <div>
          <label
            for="description"
            class="block mb-2 text-md font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            {...register("description")}
            placeholder="John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick"
          ></textarea>
        </div>
        <div>
          <label for="year" class="block mb-2 text-md font-medium text-white">
            Year
          </label>
          <input
            type="number"
            name="number"
            id="year"
            class="mb-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 "
            {...register("year")}
            placeholder="2023"
            required
          />
        </div>
        <div>
          <label for="year" class="block mb-2 text-md font-medium text-white">
            Rating
          </label>
          <input
            type="number"
            id="year"
            class="mb-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 "
            {...register("rating")}
            placeholder="9.5"
            required
          />
        </div>
        <div>
          <label for="url" class="block mb-2 text-md font-medium text-white">
            Tags(prototype testing)
          </label>
          <input
            type="text"
            id="url"
            class="mb-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            {...register("tags")}
            placeholder="action crime thriller"
            required
          />
        </div>
        {/* IMG INPUT */}
        <div class="w-full mt-2">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-50 border-2 
            border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-200  hover:bg-gray-300"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
            </div>
          </label>
          <input
            id="dropzone-file"
            type="file"
            class="file:hidden text-white image-file"
            accept="image/*"
            onChange={(e) => setFileImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          class=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
