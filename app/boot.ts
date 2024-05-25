import modules from "./modules";

export function boot() {
  Object.keys(modules).forEach((item) => {
    modules[item as keyof typeof modules].boot();
  });
}
