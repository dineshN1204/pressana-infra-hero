import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  // Data type for a site visit submission
  type VisitSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    visitDate : Text;
    visitTime : Text;
    message : Text;
    timestamp : Int;
    id : Nat;
  };

  module VisitSubmission {
    public func compare(a : VisitSubmission, b : VisitSubmission) : Order.Order {
      if (a.timestamp > b.timestamp) { #less } else if (a.timestamp < b.timestamp) {
        #greater;
      } else {
        Text.compare(a.name, b.name);
      };
    };
  };

  // Persistent storage for all submissions
  let submissions = Map.empty<Nat, VisitSubmission>();
  var submissionCount = 0;

  // Submit a new site visit - no shared function or query, as that is not possible through a form.
  public shared ({ caller }) func submitVisit(name : Text, phone : Text, email : Text, visitDate : Text, visitTime : Text, message : Text) : async Nat {
    let timestamp = Time.now();
    let submission : VisitSubmission = {
      name;
      phone;
      email;
      visitDate;
      visitTime;
      message;
      timestamp;
      id = submissionCount;
    };
    submissions.add(submissionCount, submission);
    submissionCount += 1;
    submissionCount - 1;
  };

  // Get all submissions (admin view)
  public query ({ caller }) func getAllSubmissions() : async [VisitSubmission] {
    submissions.values().toArray().sort();
  };

  // Get a single submission by ID. Not used by the frontend.
  public query ({ caller }) func getSubmission(id : Nat) : async VisitSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
