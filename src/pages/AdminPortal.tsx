
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Utility types
type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Project = {
  title: string;
  firm: string;
  type: string;
  location: string;
  year: string;
  details: string;
  image: string;
  client: string;
};

type GalleryItem = {
  image: string;
  description: string;
};

// Main Admin Portal page
const AdminPortal = () => {
  // In-memory state for demo purposes (lost on reload)
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  // Project form state
  const [projectForm, setProjectForm] = useState<Project>({
    title: "",
    firm: "",
    type: "",
    location: "",
    year: "",
    details: "",
    image: "",
    client: "",
  });

  // Gallery form state
  const [galleryForm, setGalleryForm] = useState<GalleryItem>({
    image: "",
    description: "",
  });

  // Handle form changes for projects
  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form changes for gallery
  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGalleryForm({
      ...galleryForm,
      [e.target.name]: e.target.value,
    });
  };

  // Simulate Contact Submissions (for demo, we can have a button to add mock data)
  const addMockContact = () => {
    setContactSubmissions((prev) => [
      ...prev,
      {
        name: "Sample User",
        email: "sample@email.com",
        company: "Example Corp",
        service: "General Inquiry",
        message: "Hello, this is a sample message.",
      }
    ]);
  };

  // Handle project add
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    setProjects(prev => [...prev, projectForm]);
    setProjectForm({
      title: "",
      firm: "",
      type: "",
      location: "",
      year: "",
      details: "",
      image: "",
      client: "",
    });
  };

  // Handle gallery add
  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    setGallery(prev => [...prev, galleryForm]);
    setGalleryForm({
      image: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Portal</h1>
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Details */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            {/* For demo: Button to simulate contact form submission */}
            <Button variant="outline" className="mb-4" onClick={addMockContact}>
              Add Mock Contact Submission
            </Button>
            {contactSubmissions.length === 0 ? (
              <div className="text-gray-500">No submissions yet.</div>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {contactSubmissions.map((c, i) => (
                  <div key={i} className="border-b pb-2">
                    <div><span className="font-semibold">Name:</span> {c.name}</div>
                    <div><span className="font-semibold">Email:</span> {c.email}</div>
                    <div><span className="font-semibold">Company:</span> {c.company}</div>
                    <div><span className="font-semibold">Service:</span> {c.service}</div>
                    <div><span className="font-semibold">Message:</span> {c.message}</div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Project Management */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
            <form onSubmit={handleAddProject} className="space-y-3">
              <Input
                type="text"
                name="title"
                placeholder="Project Title"
                value={projectForm.title}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="firm"
                placeholder="Firm Name"
                value={projectForm.firm}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="type"
                placeholder="Project Type"
                value={projectForm.type}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="location"
                placeholder="Location"
                value={projectForm.location}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="year"
                placeholder="Year"
                value={projectForm.year}
                onChange={handleProjectChange}
                required
              />
              <Textarea
                name="details"
                placeholder="Project Details"
                value={projectForm.details}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={projectForm.image}
                onChange={handleProjectChange}
              />
              <Input
                type="text"
                name="client"
                placeholder="Client Name"
                value={projectForm.client}
                onChange={handleProjectChange}
                required
              />
              <Button type="submit" className="w-full">Add Project</Button>
            </form>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Project List</h3>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {projects.map((p, idx) => (
                  <div key={idx} className="border-b pb-1">
                    <div><b>{p.title}</b> ({p.year}) - {p.firm}</div>
                    <div className="text-xs text-gray-600">Client: {p.client}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Gallery Management */}
        <section className="bg-white shadow rounded-lg p-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Gallery Management</h2>
          <form onSubmit={handleAddGallery} className="flex flex-col md:flex-row gap-4 mb-4">
            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              value={galleryForm.image}
              onChange={handleGalleryChange}
              required
              className="flex-1"
            />
            <Input
              type="text"
              name="description"
              placeholder="Description"
              value={galleryForm.description}
              onChange={handleGalleryChange}
              required
              className="flex-1"
            />
            <Button type="submit">Add Photo</Button>
          </form>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item, idx) => (
              <div key={idx} className="border rounded overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-2 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPortal;
